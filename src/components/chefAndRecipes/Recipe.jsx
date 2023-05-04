import React, { useState } from 'react';

import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { toast } from 'react-toastify';

const Recipe = ({recipe}) => {
    const [favorite,setFavorite] = useState(false);
    const handleFavorite = ()=>{
        toast(`${recipe.recipeName} is your favorite!`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setFavorite(true);
    }
    console.log('favorite',favorite);

    console.log(recipe);
    return (
        <div className='w-[330px] h-[460px] border border-[#672d0c] p-3 rounded-xl flex flex-col'>
            <div className='relative'>
                <img className='w-full h-[200px] object-cover object-top block rounded-md' src={recipe.img} />
            </div>
            <div className='mt-3 relative h-full'>
                <div className='flex justify-between items-center'>
                    <p className='text-[#672d0c] text-2xl font-bold'>{recipe.recipeName}</p>
                    <button className={`px-4 py-2 rounded-md border ${!favorite?'border-[#672d0c] text-[#672d0c]':'border-[#ffd77b] text-[#ffd77b]'} font-bold text-xs`} disabled={favorite} onClick={handleFavorite}>Favorite</button>
                </div>
                <p className='mt-3 text-sm text-gray-500'><span className='text-black font-bold'>Ingredients: </span>{recipe.ingredients.map((each,i,list) => <span key={i}>{each}{i===list.length-1?<span>.</span>:<span>,</span>} </span>)}</p>
                
                <p className='text-gray-500 mt-2 leading-4 text-justify text-xs h-24 border p-1 rounded-md overflow-x-auto shadow-lg'><span className='font-bold text-black'>Cooking method :</span> {recipe.cookingMethod} years</p>
                <div className='w-full pt-2 flex gap-2 items-center justify-end absolute bottom-0 border-t'>
                    <Rating style={{ maxWidth: 70 }} value={recipe.rating} readOnly />
                    <p className='text-sm text-gray-500 relative top-[1px]'>{recipe.rating}</p>
                </div>
                
                
            </div>

                
        </div>
    )
};

export default Recipe;