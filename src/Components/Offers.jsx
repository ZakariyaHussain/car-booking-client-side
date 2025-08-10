import React from 'react';
import { Link } from 'react-router';
import { motion } from "motion/react"

const Offers = () => {
    return (
        <div className='px-6 mx-auto'>
            <div className='mt-16 mb-10'>
                <h2 className='text-2xl font-bold text-center'>Special Offers</h2>
            </div>
            <div
                className="hero  min-h-[450px]"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co/9RdXkRd/bg-2.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                <div className="hero-overlay bg-black/70"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div>
                        <h1 className="mb-5 text-5xl font-bold drop-shadow-lg">“Get <motion.span animate={{ color: ['#f20202', '#f2e30a', '#f7072b'], transition: { duration: 2, repeat: Infinity } }}>15% Off</motion.span> for weekend rentals!”</h1>
                        <h1 className="mb-5 text-5xl font-bold shadow-2xl">“Luxury cars at <motion.span animate={{ color: ['#f70707', '#f7d707', '#f7071b'], transition: { duration: 3, repeat: Infinity } }}>$99/Day</motion.span> this holiday season!”</h1>
                        <Link to='availableCars'><button className="btn bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow-lg transition duration-300 ease-in-out">Book Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;