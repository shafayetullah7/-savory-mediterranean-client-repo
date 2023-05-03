import React from 'react';
import Nav from './Nav';
import Carousel from './carousel/Carousel';
import Chefs from '../chefs/Chefs';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const chefs = useLoaderData();
    console.log(chefs);
    return (
        <div>
            <div className='relative'>
                <div className='z-40 absolute top-0 w-full text-white'>
                    <Nav></Nav>
                </div>
                <div className=''>
                <Carousel></Carousel>
                </div>
            </div>
            <div className='lg:mx-24 mt-32'>
                <Chefs chefs={chefs}></Chefs>
            </div>
        </div>
    );
};

export default Home;