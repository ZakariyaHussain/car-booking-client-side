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
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div>
                        <h1 className="mb-5 text-5xl font-bold shadow-2xl">“Get <motion.span animate={{ color: ['#f20202', '#f2e30a', '#f7072b'], transition: { duration: 2, repeat: Infinity } }}>15% Off</motion.span> for weekend rentals!”</h1>
                        <h1 className="mb-5 text-5xl font-bold shadow-2xl">“Luxury cars at <motion.span animate={{ color: ['#f70707', '#f7d707', '#f7071b'], transition: { duration: 3, repeat: Infinity } }}>$99/Day</motion.span> this holiday season!”</h1>
                        <Link to='availableCars'><button className="btn btn-xl btn-primary mt-4">Book Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;