import React from 'react';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage:
                    "url(https://i.ibb.co/3XTxw1t/bg-1.png)",
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold shadow-2xl">Your Next Car Awaits You.</h1>
                    <Link to='availableCars'><button className="btn bg-green-400 text-white">View Available Cars</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;