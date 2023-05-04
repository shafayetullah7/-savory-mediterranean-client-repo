import React from 'react';
import Marquee from "react-fast-marquee";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const Reviews = ({reviews}) => {
    return (
        <div className='border py-10 rounded-xl'>
            <h1 className='text-center text-4xl font-bold'>What our customers have to say</h1>
            <div className='w-full mt-16'>
                <Marquee >
                    {reviews.map(review => <div 
                    key={review.id}
                    className='w-[300px] h-[200px] border border-[#A3BB98] p-3 rounded-xl mx-10 shadow-2xl relative'
                    >
                        <div className='flex gap-3 items-center border-b border-[#A3BB98] pb-3'>
                            <img className='w-[40px] h-[40px] object-cover object-center rounded-full border-2 border-gray-600' src={review.image} alt="" />
                            <p className='font-bold text-lg'>{review.name}</p>
                        </div>
                        <p className='text-xs mt-2 text-gray-700 text-justify'>{review.review}</p>
                        <div className='w-fit gap-2 absolute bottom-3 right-3'>
                            <Rating style={{ maxWidth: 70 }} value={review.rating} readOnly ></Rating>
                        </div>
                    </div>)}
                </Marquee>
            </div>
        </div>
    );
};

export default Reviews;