import React from 'react';

const RecentCars = ({ car }) => {
    const {carModel, rentalPrice, availability, datePosted, bookingCount, photo} = car;
    //console.log(Car_Model, rate, Availability, Date_Posted);
    return (

        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img
                    src={photo}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <p className="text-lg font-bold">Model: <span className='font-normal'>{carModel}</span></p>
                <p className="text-lg font-bold">Daily Price: <span className='font-normal'>{rentalPrice}</span></p>
                <p className='text-lg font-bold'>Availability: <span className='font-normal'>{availability}</span></p>
                <p className='text-lg font-bold'>Date Posted: <span className='font-normal'>{datePosted}</span></p>
                <p className='text-lg font-bold'>Booking Count: <span className='font-normal'>{bookingCount}</span></p>
                <div className="card-actions">
                    <button className="btn btn-primary hover:touch-pinch-zoom">Book Now</button>
                </div>
            </div>
        </div>
        
    );
};

export default RecentCars;