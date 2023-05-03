import React from 'react';
import Nav from './Nav';
import Carousel from './carousel/Carousel';
import { Outlet } from 'react-router-dom';

const Home = () => {
    
    // console.log(chefs);
    return (
        <div>
            <Carousel></Carousel>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;