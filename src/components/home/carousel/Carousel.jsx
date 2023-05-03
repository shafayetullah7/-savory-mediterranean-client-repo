import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

import img1 from '../../../assets/carousel/img1.jpg';
import img2 from '../../../assets/carousel/img2.jpg';
import img3 from '../../../assets/carousel/img3.jpg';

const Carousel = () => {

    const carouseData = [
        {
            heading: "Meet Our Talented Chefs",
            description: "Our website is home to a collection of the world's most talented Mediterranean chefs. From classic dishes to innovative creations, our chefs share their unique recipes and cooking tips to inspire your next culinary adventure.",
        },
        {
            heading: "Try Our Featured Recipe",
            description: "Our chef-approved recipes feature authentic Mediterranean flavors and ingredients, and are created by top culinary talents from around the world. Elevate your cooking skills and impress your guests with our delicious and nutritious recipes.",
        },
        {
            heading: "Join Our Food Lovers Community",
            description: "Connect with other food lovers and Mediterranean chefs on our website. Share your favorite recipes, learn new techniques, and get inspired by the creativity of our talented chefs. Whether you're a home cook or a professional chef, there's something for everyone in our community.",
        }
    ]

    return (
        <div className="">
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                speed={1500}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='relative w-full  h-[80vh]'>
                        <img className='h-full w-full object-cover object-top absolute top-0 -z-10' src={img1} alt="" />
                        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-30 text-white lg:w-[600px] text-center px-5 w-full">
                            <h1 className="font-avro font-black md:text-6xl text-4xl">{carouseData[0].heading}</h1>
                            <p className="md:mt-10 mt-5 text-gray-200">{carouseData[0].description}</p>
                        </div>
                        <div className="w-full h-full bg-black bg-opacity-70 absolute"></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-full  h-[80vh]'>
                        <img className='h-full w-full object-cover object-top absolute top-0 -z-10' src={img2} alt="" />
                        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-30 text-white lg:w-[600px] text-center px-5 w-full">
                            <h1 className="font-avro font-black md:text-6xl text-4xl">{carouseData[1].heading}</h1>
                            <p className="md:mt-10 mt-5 text-gray-200">{carouseData[1].description}</p>
                        </div>
                        <div className="w-full h-full bg-black bg-opacity-70 absolute"></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-full  h-[80vh]'>
                        <img className='h-full w-full object-cover object-top absolute top-0 -z-10' src={img3} alt="" />
                        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-30 text-white lg:w-[600px] text-center px-5 w-full">
                            <h1 className="font-avro font-black md:text-6xl text-4xl">{carouseData[2].heading}</h1>
                            <p className="md:mt-10 mt-5 text-gray-200">{carouseData[2].description}</p>
                        </div>
                        <div className="w-full h-full bg-black bg-opacity-70 absolute"></div>
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default Carousel;