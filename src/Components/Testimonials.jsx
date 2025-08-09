import React from 'react';
import { IoIosCar } from 'react-icons/io';

const Testimonials = () => {
    return (

        <div className="px-6 mx-auto">
            {/* Section Title */}
            <div className="mt-16 mb-10 text-center">
                <h5 className="font-semibold text-green-500 tracking-wider uppercase">Testimonials</h5>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    What They’re Talking About RideHub
                </h2>
            </div>

            {/* Testimonial Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition duration-300">
                    <figure className="w-[100px] h-[100px] mx-auto mb-4 rounded-full border-4 border-green-400 overflow-hidden shadow-md">
                        <img src="https://i.ibb.co/n85BRBRQ/testimonial-1.jpg" alt="Sarah M." className="w-full h-full object-cover" />
                    </figure>
                    <p className="text-gray-600 italic mb-4">"Smooth booking process and the car was in great condition. Will definitely rent again!"</p>
                    <h2 className="text-lg font-semibold text-gray-800">Sarah M.</h2>
                </div>

                {/* Card 2 */}
                <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition duration-300">
                    <figure className="w-[100px] h-[100px] mx-auto mb-4 rounded-full border-4 border-green-400 overflow-hidden shadow-md">
                        <img src="https://i.ibb.co/W4b1GdTQ/testimonial-2.jpg" alt="Priya K." className="w-full h-full object-cover" />
                    </figure>
                    <p className="text-gray-600 italic mb-4">"Very professional and punctual. The car looked exactly like the pictures."</p>
                    <h2 className="text-lg font-semibold text-gray-800">Priya K.</h2>
                </div>

                {/* Card 3 */}
                <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition duration-300">
                    <figure className="w-[100px] h-[100px] mx-auto mb-4 rounded-full border-4 border-green-400 overflow-hidden shadow-md">
                        <img src="https://i.ibb.co/bRzv2Nfw/testimonial-3.jpg" alt="David L." className="w-full h-full object-cover" />
                    </figure>
                    <p className="text-gray-600 italic mb-4">"Rented a Lamborghini for the weekend — it was a dream ride! Highly recommend!"</p>
                    <h2 className="text-lg font-semibold text-gray-800">David L.</h2>
                </div>
            </div>
        </div>

    );
};

export default Testimonials;