import React from 'react';
import { IoIosCar } from "react-icons/io";
import { MdOutlinePriceCheck } from "react-icons/md";
import { FcCustomerSupport } from "react-icons/fc";
import { TbBrandBooking } from "react-icons/tb";

const WhyChooseUs = () => {
    return (
        // <div className='px-6 mx-auto'>
        //     <div className='mt-16 mb-10'>
        //         <h2 className='text-2xl font-bold text-center'>Why Choose Us?</h2>
        //     </div>
        //     {/* Cards */}
        //     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        //         {/* Card 1 */}
        //         <div className="card bg-[#d0f7e2] shadow-lg p-6">
        //             <figure className="w-[100px] h-[100px] bg-base-100 rounded-full p-1 mx-auto">
        //                 <IoIosCar size={45} />
        //             </figure>
        //             <div className="card-body items-center text-center">
        //                 <h2 className="card-title">Wide Variety of Cars</h2>
        //                 <p>From budget-friendly options to luxury vehicles.</p>
        //             </div>
        //         </div>
        //         {/* Card 2 */}
        //         <div className="card bg-[#d0f7e2] shadow-lg p-6">
        //             <figure className="w-[100px] h-[100px] bg-base-100 rounded-full p-1 mx-auto">
        //                 <MdOutlinePriceCheck size={45} />
        //             </figure>
        //             <div className="card-body items-center text-center">
        //                 <h2 className="card-title">Affordable Prices</h2>
        //                 <p>Competitive daily rates you can count on.</p>

        //             </div>
        //         </div>
        //         {/* Card 3 */}
        //         <div className="card bg-[#d0f7e2] shadow-lg p-6">
        //             <figure className="w-[100px] h-[100px] bg-base-100 rounded-full p-1 mx-auto">
        //                 <TbBrandBooking size={45} />
        //             </figure>
        //             <div className="card-body items-center text-center">
        //                 <h2 className="card-title">Easy Booking Process</h2>
        //                 <p>Seamlessly book your ride in just a few clicks.</p>

        //             </div>
        //         </div>
        //         {/* Card 4 */}
        //         <div className="card bg-[#d0f7e2] shadow-lg p-6">
        //             <figure className="w-[100px] h-[100px] bg-base-100 rounded-full p-1 mx-auto">
        //                 <FcCustomerSupport size={45} />
        //             </figure>
        //             <div className="card-body items-center text-center">
        //                 <h2 className="card-title">Customer Support</h2>
        //                 <p>24/7 assistance for all your queries.</p>

        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="px-6 mx-auto">

            {/* Section Title */}
            <div className="mt-16 mb-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    Why Choose Us?
                </h2>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                {/* Card 1 */}
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300 text-center border-t-4 border-green-400">
                    <figure className="w-[100px] h-[100px] bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-green-200 transition">
                        <IoIosCar size={45} className="text-green-500" />
                    </figure>
                    <h2 className="text-lg font-semibold text-gray-800">Wide Variety of Cars</h2>
                    <p className="text-gray-600">From budget-friendly options to luxury vehicles.</p>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300 text-center border-t-4 border-green-400">
                    <figure className="w-[100px] h-[100px] bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-green-200 transition">
                        <MdOutlinePriceCheck size={45} className="text-green-500" />
                    </figure>
                    <h2 className="text-lg font-semibold text-gray-800">Affordable Prices</h2>
                    <p className="text-gray-600">Competitive daily rates you can count on.</p>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300 text-center border-t-4 border-green-400">
                    <figure className="w-[100px] h-[100px] bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-green-200 transition">
                        <TbBrandBooking size={45} className="text-green-500" />
                    </figure>
                    <h2 className="text-lg font-semibold text-gray-800">Easy Booking Process</h2>
                    <p className="text-gray-600">Seamlessly book your ride in just a few clicks.</p>
                </div>

                {/* Card 4 */}
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300 text-center border-t-4 border-green-400">
                    <figure className="w-[100px] h-[100px] bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-green-200 transition">
                        <FcCustomerSupport size={45} className="text-green-500" />
                    </figure>
                    <h2 className="text-lg font-semibold text-gray-800">Customer Support</h2>
                    <p className="text-gray-600">24/7 assistance for all your queries.</p>
                </div>
            </div>
        </div>

    );
};

export default WhyChooseUs;