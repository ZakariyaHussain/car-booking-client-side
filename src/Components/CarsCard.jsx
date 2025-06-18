import React from 'react';
import { Link } from 'react-router';

const CarsCard = ({ car }) => {
    const { _id, carModel, features, description, rentalPrice, availability, registrationNumber, datePosted, bookingCount, photo } = car;

    //handle delete button
        // const handleBookNowButton = (_id) => {
        //     //console.log(_id);
        //     Swal.fire({
        //         title: "Are you sure Booking Now?",
        //         text: "You won't be able to revert this!",
        //         icon: "warning",
        //         showCancelButton: true,
        //         confirmButtonColor: "#3085d6",
        //         cancelButtonColor: "#d33",
        //         confirmButtonText: "Yes, delete it!"
        //     }).then((result) => {
        //         //console.log(result.isConfirmed);
        //         if (result.isConfirmed) {
        //             //start deleting
        //             fetch(`https://car-booking-server.vercel.app/cars/${_id}`, {
        //                 method: 'DELETE',
        //             })
        //                 .then(res => res.json())
        //                 .then(data => {
        //                     //console.log('after delete', data);
        //                     if (data.deletedCount) {
        //                         Swal.fire({
        //                             title: "Deleted!",
        //                             text: "Your select car has been deleted.",
        //                             icon: "success"
        //                         });
    
        //                         // remove delete plant from ui
        //                         const remainingCars = cars.filter(deleteCar => deleteCar._id !== _id);
        //                         setCars(remainingCars);
        //                     }
        //                 })
        //         }
        //     });
        // }
    return (
        <div className="card bg-amber-100 shadow-lg p-6">
            <figure>
                <img
                    src={photo}
                    alt="Shoes" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{carModel}</h2>
                <p>{description}</p>
            <Link to={`/carDetails/${_id}`}><button className="btn btn-primary hover:touch-pinch-zoom">Book Now</button></Link>
            {/* <button onClick={()=>handleBookNowButton(_id)} className="btn btn-primary hover:touch-pinch-zoom">Book Now</button> */}
            </div>
        </div>
    );
};

export default CarsCard;