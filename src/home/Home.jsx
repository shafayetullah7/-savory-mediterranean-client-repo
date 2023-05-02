import React from 'react';
import Nav from './Nav';
import Carousel from './carousel/Carousel';

const Home = () => {
    return (
        <div className='relative'>
            <div className='z-40 absolute top-0 w-full text-white'>
                <Nav></Nav>
            </div>
            <div className=''>
            <Carousel></Carousel>
            </div>
        </div>
    );
};

export default Home;