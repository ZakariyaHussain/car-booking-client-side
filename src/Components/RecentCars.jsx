import React from 'react';

const RecentCars = () => {
    return (
        <div className='px-6 mx-auto'>
            <div className='mt-16 mb-10'>
                <h2 className='text-2xl font-bold text-center'>Recent Cars</h2>
            </div>
            {/* Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {/* card 1 */}
                <div className="card bg-base-100 shadow-sm">
                    <figure>
                        <img
                            src="https://i.ibb.co/QvJ4z3tt/Lamborghini.jpg"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <p className="text-lg font-bold">Model: <span className='font-normal'>Lamborghini</span></p>
                        <p className="text-lg font-bold">Daily Price: <span className='font-normal'>$350/day</span></p>
                        <p className='text-lg font-bold'>Availability: <span className='font-normal'>Available</span></p>
                        <p className='text-lg font-bold'>Date Posted: <span className='font-normal'>2 Days ago</span></p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Book Now</button>
                        </div>
                    </div>
                </div>
                {/* card 2 */}
                <div className="card bg-base-100 shadow-sm">
                    <figure>
                        <img
                            src="https://i.ibb.co/QvJ4z3tt/Lamborghini.jpg"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <p className="text-lg font-bold">Model: <span className='font-normal'>Lamborghini</span></p>
                        <p className="text-lg font-bold">Daily Price: <span className='font-normal'>$350/day</span></p>
                        <p className='text-lg font-bold'>Availability: <span className='font-normal'>Available</span></p>
                        <p className='text-lg font-bold'>Date Posted: <span className='font-normal'>2 Days ago</span></p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Book Now</button>
                        </div>
                    </div>
                </div>
                {/* card 3 */}
                <div className="card bg-base-100 shadow-sm">
                    <figure>
                        <img
                            src="https://i.ibb.co/QvJ4z3tt/Lamborghini.jpg"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <p className="text-lg font-bold">Model: <span className='font-normal'>Lamborghini</span></p>
                        <p className="text-lg font-bold">Daily Price: <span className='font-normal'>$350/day</span></p>
                        <p className='text-lg font-bold'>Availability: <span className='font-normal'>Available</span></p>
                        <p className='text-lg font-bold'>Date Posted: <span className='font-normal'>2 Days ago</span></p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Book Now</button>
                        </div>
                    </div>
                </div>
                {/* card 4 */}
                <div className="card bg-base-100 shadow-sm">
                    <figure>
                        <img
                            src="https://i.ibb.co/QvJ4z3tt/Lamborghini.jpg"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <p className="text-lg font-bold">Model: <span className='font-normal'>Lamborghini</span></p>
                        <p className="text-lg font-bold">Daily Price: <span className='font-normal'>$350/day</span></p>
                        <p className='text-lg font-bold'>Availability: <span className='font-normal'>Available</span></p>
                        <p className='text-lg font-bold'>Date Posted: <span className='font-normal'>2 Days ago</span></p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Book Now</button>
                        </div>
                    </div>
                </div>
                {/* card 5 */}
                <div className="card bg-base-100 shadow-sm">
                    <figure>
                        <img
                            src="https://i.ibb.co/QvJ4z3tt/Lamborghini.jpg"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <p className="text-lg font-bold">Model: <span className='font-normal'>Lamborghini</span></p>
                        <p className="text-lg font-bold">Daily Price: <span className='font-normal'>$350/day</span></p>
                        <p className='text-lg font-bold'>Availability: <span className='font-normal'>Available</span></p>
                        <p className='text-lg font-bold'>Date Posted: <span className='font-normal'>2 Days ago</span></p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Book Now</button>
                        </div>
                    </div>
                </div>
                {/* card 6 */}
                <div className="card bg-base-100 shadow-sm">
                    <figure>
                        <img
                            src="https://i.ibb.co/QvJ4z3tt/Lamborghini.jpg"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <p className="text-lg font-bold">Model: <span className='font-normal'>Lamborghini</span></p>
                        <p className="text-lg font-bold">Daily Price: <span className='font-normal'>$350/day</span></p>
                        <p className='text-lg font-bold'>Availability: <span className='font-normal'>Available</span></p>
                        <p className='text-lg font-bold'>Date Posted: <span className='font-normal'>2 Days ago</span></p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentCars;