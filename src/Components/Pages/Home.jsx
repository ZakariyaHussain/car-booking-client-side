import React from 'react';
import Banner from '../Header/Banner';
import WhyChooseUs from '../WhyChooseUs';
import RecentCars from '../RecentCars';
import Testimonials from '../Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhyChooseUs></WhyChooseUs>
            <RecentCars></RecentCars>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;