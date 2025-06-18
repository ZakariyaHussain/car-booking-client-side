import React from 'react';
import { Link, useLoaderData } from 'react-router';
import MyCarsCard from '../MyCarsCard';

const MyCars = () => {
    const myCars = useLoaderData();
    const cars = myCars.data;
    //const [cars, setCars] = useState(myCars.data || [])
    return (
        <div className="overflow-x-auto rounded-box border border-base-content/5 px-5 my-20">
            {
                cars.length > 0 ? <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Car Image</th>
                            <th>Car Model</th>
                            <th>Daily Rental Price</th>
                            <th>Booking Count</th>
                            <th>Availability</th>
                            <th>Date Added</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}
                        {
                            cars.map(car => <MyCarsCard key={car._id} car={car}></MyCarsCard>)
                        }

                    </tbody>
                </table> : <div>
                    <h2 className='text-center text-2xl font-bold'>Please add a car</h2>
                    <Link to='/addCar'><button className='btn btn-primary w-full mt-8'>Add Car</button></Link>
                </div>
            }
        </div>
    );
};

export default MyCars;