import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CarsCard from '../CarsCard';

const AvailableCars = () => {
    const availableCars = useLoaderData();
    const cars = availableCars.data;

    const [viewMode, setViewMode] = useState("grid");
    const [sortBy, setSortBy] = useState("price_desc");

    // grid or list toggle
    const toggleView = () => {
        setViewMode((prev) => (prev === "grid" ? "list" : "grid"));
    };

    // sort
    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };
    const sortedCars = [...cars].sort((a, b) => {
        switch (sortBy) {
            case "price_asc":// Lowest Price
                return a.rentalPrice - b.rentalPrice;
            case "price_desc":// Highest Price
                return b.rentalPrice - a.rentalPrice;
            default:
                return 0;
        }
    });

    return (
        <div className='p-25'>
            <div className='text-center px-16 mb-10'>
                <h1 className='text-[25px] font-bold'>Available Cars</h1>
                <p>Enter details like model, rent rate, availability, and more to keep your listings updated and ready for booking.</p>

                <div className='flex justify-center items-center gap-8 mt-6'>
                    {/* Toggle */}
                    <button
                        onClick={toggleView}
                        className="btn bg-green-400 text-white shadow hover:bg-green-700"
                    >
                        Switch to {viewMode === "grid" ? "List" : "Grid"} View
                    </button>

                    {/* Sort Dropdown */}
                    <div>
                        <label className="mr-2 font-semibold">Sort by:</label>
                        <select
                            value={sortBy}
                            onChange={handleSortChange}
                            className="px-3 py-1 border rounded"
                        >
                            <option value="price_asc">Price: Lowest First</option>
                            <option value="price_desc">Price: Highest First</option>
                        </select>
                    </div>
                </div>
            </div>


            <div className={
                viewMode === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    : "flex flex-col gap-6"
            }>
                {
                    sortedCars.map(car => <CarsCard key={car._id} car={car}></CarsCard>)
                }
            </div>

        </div>
    );
};

export default AvailableCars;