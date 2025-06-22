import axios from 'axios';
import React, { use, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
import Swal from 'sweetalert2';

const CarDetails = () => {
    const { user } = use(AuthContext);
    const carData = useLoaderData();
    const car = carData.data;
    const [bookingCar, setBookingCar] = useState(car);
    const { _id, carModel, features, description, rentalPrice, availability, bookingCount, photo, email } = bookingCar || {};


    //handle booking
    const handleBookNowButton = () => {
        if (user?.email === email)
            return alert('It yourself car')
        const bookingInfo = {
            carId: _id,
            customerEmail: user?.email
        }
        //
        axios.post(`https://car-booking-server.vercel.app/booking-car/${_id}`, bookingInfo)
            .then(data => {
                // const carModel = res.data.carModel;
                console.log(data);
                Swal.fire({
                    title: "Are you sure, are you want to book now?",
                    html: `<div className='space-y-2'>
                        <h3 className='text-2xl font-medium'><span className='font-bold text-green-500'>Car Model:</span> ${carModel}</h3>
                        <h3 className='text-2xl font-medium'><span className='font-bold text-green-500'>Features:</span> ${features}</h3>
                        <h3 className='text-2xl font-medium'><span className='font-bold text-green-500'>Rental Price: $</span>${rentalPrice}/day</h3>
                        <h3 className='text-2xl font-medium'><span className='font-bold text-green-500'>Availability: </span>${availability}</h3>
                        <h3 className='text-2xl font-medium'><span className='font-bold text-green-500'>Booking Count: </span>${bookingCount}</h3>
                    </div>`,
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Book Now"
                })
                setBookingCar(prev => {
                    return { ...prev, bookingCount: prev.bookingCount - 1 }
                })
                
            })
    }

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
                        <h3 className='text-2xl font-medium'><span className='font-bold text-green-500'>Rental Price:</span> ${rentalPrice}/day</h3>
                        <h3 className='text-2xl font-medium'><span className='font-bold text-green-500'>Availability: </span>{availability}</h3>
                        <h3 className='text-2xl font-medium'><span className='font-bold text-green-500'>Booking Count: </span>{bookingCount}</h3>
                    </div>

                </div>
            </div>
            <div className='mt-8'>
                <button onClick={handleBookNowButton} className="btn bg-green-400 text-white w-full hover:touch-pinch-zoom">Book Now</button>
            </div>
        </div>
    );
};

export default CarDetails;