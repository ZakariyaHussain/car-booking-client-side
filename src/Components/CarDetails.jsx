import React from 'react';
import { useLoaderData } from 'react-router';

const CarDetails = () => {

    const carData = useLoaderData();
    const car = carData.data;
    console.log(car);
    const { _id, carModel, features, description, rentalPrice, availability, photo } = car || {};

    return (
        <div className='px-5 my-20 mx-auto'>
            <h1 className='text-center text-5xl font-bold mb-16'>Car Details</h1>
            <div className='flex gap-6'>
                <div className='w-[70%]'>
                    <div className='flex justify-center items-center'>
                        <img className='max-w-[450px] rounded-2xl' src={photo} alt="car" />
                    </div>
                    <div className='mt-16'>
                        <h2 className='text-3xl font-bold mb-4'>Car Name: {carModel}</h2>
                        <p><span className='font-bold'>Description:</span> {description}</p>
                    </div>
                </div>
                <div className='w-[30%]'>
                    <h2 className='text-3xl font-bold mb-6'>Car Information</h2>
                    <div className='space-y-2'>
                        <h3 className='text-2xl font-medium'><span className='font-bold text-green-500'>Car Model:</span> {carModel}</h3>
                        <h3 className='text-2xl font-medium'><span className='font-bold text-green-500'>Features:</span> {features}</h3>
                        <h3 className='text-2xl font-medium'><span className='font-bold text-green-500'>Rental Price:</span> {rentalPrice}</h3>
                        <h3 className='text-2xl font-medium'><span className='font-bold text-green-500'>Availability: </span>{availability}</h3>
                    </div>

                </div>
            </div>
            <div className='mt-8'>
                <button onClick={() => handleBookNowButton(_id)} className="btn btn-primary w-full hover:touch-pinch-zoom">Book Now</button>
            </div>
        </div>
    );
};

export default CarDetails;