import React from 'react';
import Banner from '../Header/Banner';
import WhyChooseUs from '../WhyChooseUs';
import RecentCars from '../RecentCars';
import Testimonials from '../Testimonials';
import Offers from '../Offers';
import { useLoaderData } from 'react-router';

const Home = () => {
    const cars = useLoaderData();
    //const [cars, setCars] = 
    //console.log(recentCars);
    return (
        <div>
            <Banner></Banner>
            <WhyChooseUs></WhyChooseUs>
            {/* recent cars */}
            <div className='px-6 mx-auto'>
                <div className='mt-16 mb-10'>
                    <h2 className='text-2xl font-bold text-center'>Recent Cars</h2>
                </div>
                {/* Cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {/* card 1 */}
                    {
                        cars.data.map(car => <RecentCars key={car._id} car={car}></RecentCars>)
                    }
                </div>
            </div>
            <Testimonials></Testimonials>
            <Offers></Offers>
        </div>
    );
};

export default Home;