import React, { useContext } from 'react';
import Chefs from '../viewChefs/Chefs';
import { useLoaderData } from 'react-router-dom';

const Land = () => {
    const chefs = useLoaderData();
    return (
        <div>
            <div className='lg:mx-24 mt-32'>
                <Chefs chefs={chefs}></Chefs>
            </div>
        </div>
    );
};

export default Land;