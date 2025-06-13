import Lottie from 'lottie-react';
import React from 'react';
import { Link, useRouteError } from 'react-router';
import LottieError from '../../assets/lottie-image/404.json';

const Error = () => {
    useRouteError();
    return (
        <div className='max-w-[420px] flex flex-col justify-center items-center bg-amber-50 border border-red-400 rounded-2xl space-y-6 px-6 py-8 mx-auto my-20'>
            <Lottie animationData={LottieError} loop={true}></Lottie>
            <Link to='/'><button className='btn btn-primary text-xl font-bold px-6 py-2 rounded-full mt-6'>Go To Home</button></Link>
        </div>
    );
};

export default Error;