import React from 'react';
import Chef from './Chef';

const Chefs = ({chefs}) => {
    return (
        <div>
            <h1 className='text-4xl font-bold'>Meet Our Chefs</h1>
            <div className='grid grid-cols-3 gap-10 mt-10 justify-items-center'>
                {chefs.map(chef=><Chef chef={chef}></Chef>)}
            </div>
        </div>
    );
};

export default Chefs;