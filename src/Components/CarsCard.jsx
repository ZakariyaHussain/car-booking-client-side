import React from 'react';
import { Link } from 'react-router';

const CarsCard = ({ car }) => {
    const { _id, carModel, description, rentalPrice, photo } = car;
    //console.log(car);

    return (
        <div className="card bg-[#d0f7e2] shadow-lg p-6 hover:scale-105 transition-transform duration-300">
            <figure className="w-full h-48 overflow-hidden">
                <img
                    src={photo}
                    alt={carModel}
                    className="w-full h-full object-contain" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-xl font-bold text-green-800">{carModel}</h2>
                <p className="text-gray-600">{description}</p>
                <p className="text-lg font-semibold text-green-700">${rentalPrice}/day</p>
                {/* <Link to={`/carDetails/${_id}`}><button className="btn bg-green-500 text-white hover:bg-green-600 transition-colors duration-300">Book Now</button></Link> */}
                <Link to={`/carDetails/${_id}`}><button className="btn bg-gray-100 text-gray-700 hover:bg-gray-200 border-none">
                    See More
                </button></Link>

            </div>
        </div>
    );
};

export default CarsCard;