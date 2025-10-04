
import React from 'react';
import { Link } from 'react-router'; // ✅ Use react-router-dom


const Banner = () => {
    return (
        <div
            className="hero min-h-screen bg-cover bg-center relative"
            style={{
                backgroundImage: "url(https://i.ibb.co.com/RpVH7sJ3/bg.png)",
                
            }}
        >
            {/* Overlay for better contrast */}
            <div className="hero-overlay bg-black/50"></div>

            {/* Content */}
            <div className="relative hero-content text-center text-white px-4">
                <div>
                    <h1 className="mb-5 text-3xl md:text-5xl font-bold drop-shadow-lg">
                        Your Next Car Awaits You.
                    </h1>
                    <Link to="/availableCars">
                        <button className="btn bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow-lg transition duration-300 ease-in-out">
                            View Available Cars
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
