import React, { useContext } from 'react';
import Carousel from './carousel/Carousel';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../../authProvider/AuthProvider';
import BarLoader from "react-spinners/ClipLoader";

  

const Home = () => {
    const {loading} = useContext(AuthContext);
    // console.log(chefs);
    return (
        <div>
            <Carousel></Carousel>
            <div className='w-fit mx-auto'>
                <BarLoader
                    color='black'
                    loading={loading}
                    // cssOverride={}
                    size={40}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
            <div className='lg:mx-24 mt-32'>
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Home;