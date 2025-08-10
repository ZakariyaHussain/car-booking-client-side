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
        // <div className='p-25'>
        //     <div className='text-center px-16 mb-10'>
        //         <h1 className='text-[25px] font-bold'>Available Cars</h1>
        //         <p>Enter details like model, rent rate, availability, and more to keep your listings updated and ready for booking.</p>

        //         <div className='sm:flex justify-center items-center gap-8 mt-6'>
        //             {/* Toggle */}
        //             <button
        //                 onClick={toggleView}
        //                 className="btn bg-green-400 text-white shadow hover:bg-green-700"
        //             >
        //                 Switch to {viewMode === "grid" ? "List" : "Grid"} View
        //             </button>

        //             {/* Sort Dropdown */}
        //             <div>
        //                 <label className="mr-2 font-semibold">Sort by:</label>
        //                 <select
        //                     value={sortBy}
        //                     onChange={handleSortChange}
        //                     className="px-3 py-1 border rounded"
        //                 >
        //                     <option value="price_asc">Price: Lowest First</option>
        //                     <option value="price_desc">Price: Highest First</option>
        //                 </select>
        //             </div>
        //         </div>
        //     </div>


        //     <div className={
        //         viewMode === "grid"
        //             ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        //             : "flex flex-col gap-6"
        //     }>
        //         {
        //             sortedCars.map(car => <CarsCard key={car._id} car={car}></CarsCard>)
        //         }
        //     </div>

        // </div>

        <div className="px-6 pt-25 pb-10 max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Available Cars</h1>
                <p className="text-gray-600 mt-2">
                    Enter details like model, rent rate, availability, and more to keep your listings updated and ready for booking.
                </p>
            </div>

            {/* Controls */}
            <div className="bg-gray-100 rounded-lg p-4 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 shadow">
                {/* Toggle View Button */}
                <button
                    onClick={toggleView}
                    className="btn bg-green-500 hover:bg-green-600 text-white shadow px-6"
                >
                    Switch to {viewMode === "grid" ? "List" : "Grid"} View
                </button>

                {/* Sort Dropdown */}
                <div className="flex items-center">
                    <label className="mr-2 font-semibold text-gray-700">Sort by:</label>
                    <select
                        value={sortBy}
                        onChange={handleSortChange}
                        className="px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                    >
                        <option value="price_asc">Price: Lowest First</option>
                        <option value="price_desc">Price: Highest First</option>
                    </select>
                </div>
            </div>

            {/* Cars List */}
            <div
                className={`mt-8 ${viewMode === "grid"
                        ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        : "flex flex-col gap-6"
                    }`}
            >
                {sortedCars.map((car) => (
                    <CarsCard key={car._id} car={car} />
                ))}
            </div>
        </div>

    );
};

export default AvailableCars;