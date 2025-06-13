import React from 'react';
import { IoIosCar } from 'react-icons/io';

const Testimonials = () => {
    return (
        <div className='px-6 mx-auto'>
            <div className='mt-16 mb-10'>
                <h5 className='font-bold text-center'>Testimonials</h5>
                <h2 className='text-2xl font-bold text-center'>What They’re Talking
                    About RideHub</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {/* card 1 */}
                <div className="card bg-amber-100 shadow-lg p-6">
                    <figure className="w-[100px] h-[100px] bg-base-100 rounded-full mx-auto">
                        <img src="https://i.ibb.co/n85BRBRQ/testimonial-1.jpg" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <p>"Smooth booking process and the car was in great condition. Will definitely rent again!"</p>
                        <h2 className="card-title">Sarah M.</h2>
                    </div>
                </div>
                {/* card 2 */}
                <div className="card bg-amber-100 shadow-lg p-6">
                    <figure className="w-[100px] h-[100px] bg-base-100 rounded-full mx-auto">
                        <img src="https://i.ibb.co/W4b1GdTQ/testimonial-2.jpg" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <p>"Very professional and punctual. The car looked exactly like the pictures."</p>
                        <h2 className="card-title">Priya K.</h2>
                    </div>
                </div>
                {/* card 3 */}
                <div className="card bg-amber-100 shadow-lg p-6">
                    <figure className="w-[100px] h-[100px] bg-base-100 rounded-full mx-auto">
                        <img src="https://i.ibb.co/bRzv2Nfw/testimonial-3.jpg" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <p>"Rented a Lamborghini for the weekend — it was a dream ride! Highly recommend!"</p>
                        <h2 className="card-title">David L.</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;