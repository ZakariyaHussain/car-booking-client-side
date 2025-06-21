import React, { useState } from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyCarsCard = ({ car }) => {
    const { _id, carModel, rentalPrice, availability, datePosted, bookingCount, photo } = car;
    const [cars, setCars] = useState();
    //handle delete button
    const handleDelete = (_id) => {
        //console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            //console.log(result.isConfirmed);
            if (result.isConfirmed) {
                //start deleting
                fetch(`https://car-booking-server.vercel.app/cars/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        //console.log('after delete', data);
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your select car has been deleted.",
                                icon: "success"
                            });

                            // remove delete plant from ui
                            const remainingCars = cars.filter(deleteCar => deleteCar._id !== _id);
                            setCars(remainingCars);
                        }
                    })
            }
        });
    }
    return (
        <tr>
            {/* serial edit after submit assignment */}
            <td><img className='max-w-[150px]' src={photo} alt="" /></td>
            <td>{carModel}</td>
            <td>${rentalPrice}/day</td>
            <td>{bookingCount}</td>
            <td>{availability}</td>
            <td>{datePosted}</td>
            <td><Link to={`/update/${_id}`}><button className="btn bg-green-500 text-white">Update</button></Link></td>
            <td><button onClick={()=>handleDelete(_id)} className="btn bg-green-500 text-white">Delete</button></td>
        </tr>
    );
};

export default MyCarsCard;