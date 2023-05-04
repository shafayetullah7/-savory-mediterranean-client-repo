import React, { useContext } from 'react';
import Carousel from './carousel/Carousel';
import { AuthContext } from '../../authProvider/AuthProvider';
import BarLoader from "react-spinners/ClipLoader";
import Chefs from '../viewChefs/Chefs';
import { useLoaderData } from 'react-router-dom';
import Services from './Services';
import Reviews from './Reviews';
  

const Home = () => {
    const {loading} = useContext(AuthContext);
    // console.log(chefs);
    const [chefs,reviews] = useLoaderData();
    console.log(chefs,reviews);

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
            <div className='lg:px-24'>
                <div className='mt-52'>
                    <Chefs chefs={chefs}></Chefs>
                </div>
                <div className='mt-52'>
                    <Services></Services>
                </div>
                <div className='mt-52'>
                    <Reviews reviews={reviews}></Reviews>
                </div>
            </div>
            
        </div>
    );
};

export default Home;