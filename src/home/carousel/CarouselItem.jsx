import React from 'react';

const CarouselItem = ({data}) => {
    return (
        <div className='relative w-full h-[600px]'>
            <img className='h-full w-full object-cover object-center' src={data.img} alt="" />
            <h1>{data.heading}</h1>
            <p>{data.description}</p>
        </div>
    );
};

export default CarouselItem;