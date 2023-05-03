import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from './Recipe';

const ChefRecipes = () => {
    const [chef,recipes] = useLoaderData();
    console.log(chef);
    console.log(recipes);
    return (
        <div>
            <div className='md:mx-24 mx-2'>
                <div className='bg-[#A3BB98] bg-opacity-20 p-5 rounded-xl flex gap-10 mt-16 lg:h-[500px]'>
                    <div className='w-full'>
                        <img className='w-full h-full object-cover object-top rounded-lg shadow-xl' src={chef.chef_picture} alt="" />
                    </div>
                    <div className='w-full flex items-center'>
                        <div>
                            <p className='text-7xl font-bold'>{chef.chef_name}</p>
                            <p className='md:w-[90%] text-sm text-gray-600 tracking-wider mt-10 text-justify indent-10'>{chef.description}</p>
                            <p className='mt-16 font-bold'>Experience: <span className='text-gray-500 font-normal'>{chef.years_of_experience} years</span></p>
                            <p className='mt-1 font-bold'>Number of recipes: <span className='text-gray-500 font-normal'>{chef.num_recipes}</span></p>
                            <p className='mt-1 font-bold'>Likes: <span className='text-gray-500 font-normal'>{chef.likes}</span></p>
                        </div>
                    </div>
                </div>
                <div className='mt-20'>
                    <h1 className='text-4xl text-center font-bold'>{chef.chef_name}'s Recipes</h1>
                    <div className='grid lg:grid-cols-3 grid-cols-1 gap-10 justify-items-center mt-10'>
                        {recipes.map((recipe,index) => <Recipe key={index} recipe={recipe}></Recipe>)}
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
};

export default ChefRecipes;