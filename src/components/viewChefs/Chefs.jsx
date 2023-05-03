import React from 'react';
import Chef from './Chef';

const Chefs = ({chefs}) => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center'>Meet Our Chefs</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-10 mt-10 justify-items-center'>
                {chefs.map(chef=><Chef key={chef.id} chef={chef}></Chef>)}
            </div>
        </div>
    );
};

export default Chefs;