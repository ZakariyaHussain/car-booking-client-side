import React from 'react';
import { Link } from 'react-router';

const RecentCars = ({ car }) => {
    const { _id, carModel, rentalPrice, availability, datePosted, bookingCount, photo } = car;
    //console.log(Car_Model, rate, Availability, Date_Posted);
    return (

        <div className="card bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100">
            <figure className="max-h-[220px] overflow-hidden">
                <img
                    src={photo}
                    alt={carModel}
                    className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                />
            </figure>

            <div className="card-body">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">{carModel}</h2>
                <div className="space-y-1 text-gray-600">
                    <p><span className="font-semibold">Daily Price:</span> ${rentalPrice}/day</p>
                    <p><span className="font-semibold">Availability:</span> {availability}</p>
                    <p><span className="font-semibold">Date Posted:</span> {datePosted}</p>
                    <p><span className="font-semibold">Booking Count:</span> {bookingCount}</p>
                </div>

                <div className="card-actions justify-between">

                    <Link to={`/carDetails/${_id}`}><button className="btn bg-gray-100 text-gray-700 hover:bg-gray-200 border-none">
                        See More
                    </button></Link>

                </div>
            </div>
        </div>

    );
};

export default RecentCars;