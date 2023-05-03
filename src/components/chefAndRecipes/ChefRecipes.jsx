import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Nav2 from '../home/Nav2';

const ChefRecipes = () => {
    const [chef,recipes] = useLoaderData();
    console.log(chef);
    console.log(recipes);
    return (
        <div>
            <Nav2></Nav2>
            <div className='mx-24 bg-[#A3BB98] bg-opacity-20 p-5 rounded-xl flex gap-10 mt-16 lg:h-[550px]'>
                <div className='w-full'>
                    <img className='w-full h-full object-cover object-top rounded-lg shadow-xl' src={chef.chef_picture} alt="" />
                </div>
                <div className='w-full'>
                    <p className='text-7xl font-bold'>{chef.chef_name}</p>
                    <p className='md:w-[90%] text-sm text-gray-600 tracking-wider mt-16 text-justify indent-10'>{chef.description}</p>
                    <p className='mt-24 font-bold'>Experience: <span className='text-gray-500 font-normal'>{chef.years_of_experience} years</span></p>
                    <p className='mt-1 font-bold'>Number of recipes: <span className='text-gray-500 font-normal'>{chef.num_recipes}</span></p>
                    <p className='mt-1 font-bold'>Likes: <span className='text-gray-500 font-normal'>{chef.likes}</span></p>
                </div>
            </div>
        </div>
    );
};

export default ChefRecipes;