import React from 'react';
import Banner from '../Header/Banner';
import WhyChooseUs from '../WhyChooseUs';
import RecentCars from '../RecentCars';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhyChooseUs></WhyChooseUs>
            <RecentCars></RecentCars>
        </div>
    );
};

export default Home;