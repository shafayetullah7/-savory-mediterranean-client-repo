import React, { useContext } from 'react';
import Chefs from '../viewChefs/Chefs';
import { useLoaderData } from 'react-router-dom';
import Services from './Services';
import Reviews from './Reviews';

const Land = () => {
    const [chefs,reviews] = useLoaderData();
    console.log(chefs,reviews);
    // const data = useLoaderData();
    // console.log(data);
    return (
        <div>
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
    );
};

export default Land;