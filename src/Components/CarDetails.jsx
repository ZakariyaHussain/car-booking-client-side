import axios from 'axios';
import React, { use, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
import Swal from 'sweetalert2';

const CarDetails = () => {
    const { user } = use(AuthContext);
    const navigate = useNavigate();
    const carData = useLoaderData();
    const car = carData.data;
    const [bookingCar, setBookingCar] = useState(car);
    const { _id, carModel, features, description, rentalPrice, availability, bookingCount, photo, email } = bookingCar || {};


    //handle booking
    const handleBookNowButton = () => {
        if (!user) {
            navigate('/login');
            return;
        }
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
        // <div className='px-5 my-20 mx-auto'>
        //     <h1 className='text-center text-5xl font-bold mb-16'>Car Details</h1>
        //     <div className='flex gap-6'>
        //         <div className='w-[70%]'>
        //             <div className='flex justify-center items-center'>
        //                 <img className='max-w-[450px] rounded-2xl' src={photo} alt="car" />
        //             </div>
        //             <div className='mt-16'>
        //                 <h2 className='text-3xl font-bold mb-4'>Car Name: {carModel}</h2>
        //                 <p><span className='font-bold'>Description:</span> {description}</p>
        //             </div>
        //         </div>
        //         <div className='w-[30%]'>
        //             <h2 className='text-3xl font-bold mb-6'>Car Information</h2>
        //             <div className='space-y-2'>
        //                 <h3 className='text-2xl font-medium'><span className='font-bold text-green-500'>Car Model:</span> {carModel}</h3>
        //                 <h3 className='text-2xl font-medium'><span className='font-bold text-green-500'>Features:</span> {features}</h3>
        //                 <h3 className='text-2xl font-medium'><span className='font-bold text-green-500'>Rental Price:</span> ${rentalPrice}/day</h3>
        //                 <h3 className='text-2xl font-medium'><span className='font-bold text-green-500'>Availability: </span>{availability}</h3>
        //                 <h3 className='text-2xl font-medium'><span className='font-bold text-green-500'>Booking Count: </span>{bookingCount}</h3>
        //             </div>

        //         </div>
        //     </div>
        //     <div className='mt-8'>
        //         <button onClick={handleBookNowButton} className="btn bg-green-400 text-white w-full hover:touch-pinch-zoom">Book Now</button>
        //     </div>
        // </div>
        <div className="px-5 my-20 mx-auto max-w-6xl">
            <h1 className="text-center text-4xl md:text-5xl font-extrabold mb-16 text-gray-800">
                Car Details
            </h1>

            <div className="flex flex-col lg:flex-row gap-10">
                {/* Left: Image + Description */}
                <div className="lg:w-2/3">
                    <div className="flex justify-center items-center">
                        <img
                            className="w-full max-w-[450px] rounded-2xl shadow-lg border border-gray-100"
                            src={photo}
                            alt={carModel}
                        />
                    </div>
                    <div className="mt-10">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Car Name: <span className="text-green-500">{carModel}</span>
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            <span className="font-bold text-gray-800">Description:</span> {description}
                        </p>
                    </div>
                </div>

                {/* Right: Car Information */}
                <div className="lg:w-1/3 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Car Information</h2>
                    <div className="space-y-3">
                        <p className="text-lg text-gray-700">
                            <span className="font-bold text-green-500">Car Model:</span> {carModel}
                        </p>
                        <p className="text-lg text-gray-700">
                            <span className="font-bold text-green-500">Features:</span> {features}
                        </p>
                        <p className="text-lg text-gray-700">
                            <span className="font-bold text-green-500">Rental Price:</span> ${rentalPrice}/day
                        </p>
                        <p className="text-lg text-gray-700">
                            <span className="font-bold text-green-500">Availability:</span> {availability}
                        </p>
                        <p className="text-lg text-gray-700">
                            <span className="font-bold text-green-500">Booking Count:</span> {bookingCount}
                        </p>
                    </div>
                </div>
            </div>

            {/* Book Now Button */}
            <div className="mt-10">
                <button
                    onClick={handleBookNowButton}
                    className="btn bg-green-500 hover:bg-green-600 text-white w-full py-3 text-lg font-semibold rounded-xl shadow-md transition duration-300"
                >
                    Book Now
                </button>
            </div>
        </div>

    );
};

export default CarDetails;