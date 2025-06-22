import React from 'react';
import { Link } from 'react-router';

const CarsCard = ({ car }) => {
    const { _id, carModel, description, rentalPrice, photo } = car;
    //console.log(car);
        
    return (
        <div className="card bg-[#d0f7e2] shadow-lg p-6">
            <figure>
                <img
                    src={photo}
                    alt="Shoes" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{carModel}</h2>
                <p>{description}</p>
                <p>${rentalPrice}/day</p>
            <Link to={`/carDetails/${_id}`}><button className="btn bg-green-400 text-white hover:touch-pinch-zoom">Book Now</button></Link>
            
            </div>
        </div>
    );
};

export default CarsCard;