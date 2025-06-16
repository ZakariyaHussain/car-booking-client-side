import React from 'react';
import { useLoaderData } from 'react-router';
import CarsCard from '../CarsCard';

const AvailableCars = () => {
    const availableCars = useLoaderData();
    const cars = availableCars.data;
    console.log(cars);
    return (
        <div className='p-25'>
            <div className='text-center px-16 mb-10'>
                <h1 className='text-[25px] font-bold'>Available Cars</h1>
                <p>Enter details like model, rent rate, availability, and more to keep your listings updated and ready for booking.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    cars.map(car => <CarsCard key={car._id} car={car}></CarsCard>)
                }
            </div>
        </div>
    );
};

export default AvailableCars;