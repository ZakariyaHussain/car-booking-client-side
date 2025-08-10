import React from 'react';
import { Link } from 'react-router';

const BookingCard = ({ car }) => {
    const { _id, carModel, rentalPrice, availability, datePosted, bookingCount, photo } = car;
    //const { _id, carModel, photo, bookingDate, totalPrice, bookingStatus } = car;
    console.log(car);
    // const [cars, setCars] = useState();
    return (
        <tr>
            <td><img className='max-w-[150px]' src={photo} alt="" /></td>
            <td>{carModel}</td>
            <td>{rentalPrice}</td>
            <td>{availability}</td>
            <td>{datePosted}</td>
            <td>{bookingCount}</td>
            <td><Link to={`/update/${_id}`}><button className="btn bg-green-500 text-white">Cancel</button></Link></td>

        </tr>
       
    );
};

export default BookingCard;