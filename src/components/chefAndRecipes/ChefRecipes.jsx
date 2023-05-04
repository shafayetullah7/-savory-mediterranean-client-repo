import React, { useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Recipe from './Recipe';
import { AuthContext } from '../../authProvider/AuthProvider';

const ChefRecipes = () => {
    const [chef,recipes] = useLoaderData();
    const {loading,setLoading} = useContext(AuthContext);
    useEffect(()=>{
        setLoading(false);
        
    },[])

    console.log(chef);
    console.log(recipes);
    return (
        <div className='lg:px-24 px-2 mt-24'>
            <div>
                <div className='bg-[#A3BB98] bg-opacity-20 p-5 rounded-xl flex flex-col md:flex-row gap-10 lg:h-[500px]'>
                    <div className='w-full'>
                    <div className='w-full h-full'>
                        <LazyLoadImage
                        className='w-full h-[300px] md:h-full object-cover object-top'
                        src={chef.chef_picture} // use normal <img> attributes as props
                         />
                        
                    </div>
                        {/* <img className='w-full h-full object-cover object-top rounded-lg shadow-xl' src={chef.chef_picture} alt="" /> */}
                    </div>
                    <div className='w-full flex items-center'>
                        <div>
                            <p className='md:text-7xl text-4xl font-bold'>{chef.chef_name}</p>
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