import React, { useContext } from 'react';
import recipeIcon15 from '../../assets/recipe-15.png'
import recipeIcon20 from '../../assets/recipe-20.png'
import { AiFillLike } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../authProvider/AuthProvider';

const Chef = ({chef}) => {
    const navigate = useNavigate();
    const {loading,setLoading} = useContext(AuthContext);

    const handleViewRecipes = () =>{
        const ids = chef.recipe_ids.join('-');
        console.log(ids);
        setLoading(true);
        navigate(`/chefs/${chef.id}`);
    }
    return (
        <div className='w-[320px] h-[350px] border p-3 rounded-xl flex flex-col'>
            <div className='relative'>
                <img className='w-full h-[200px] object-cover object-top block rounded-md' src={chef.chef_picture} />
                <p className='text-[#A3BB98] text-2xl font-bold absolute top-2 left-3'>{chef.chef_name}</p>
            </div>
            
            <div className='mt-4 relative h-full'>
                <p><span className='font-bold'>Experience :</span> {chef.years_of_experience} years</p>
                <div className='flex items-center justify-between text-gray-500 border px-3 py-2 rounded-lg'>
                    <div className='flex items-center gap-1'>
                        <img className='relative bottom-[2px]' src={recipeIcon15} alt="" />
                        <p>{chef.num_recipes} recipes</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <p className='relative top-[2px]'>{chef.likes}</p>
                        <AiFillLike className='text-xl'></AiFillLike>
                    </div>
                </div>
                <button className='w-full py-3 bg-[#A3BB98] text-xl font-bold absolute bottom-0 flex justify-center items-center gap-3' onClick={handleViewRecipes}><img src={recipeIcon20} className='relative bottom-[2px]' alt=""/> View Recipes</button>
            </div>
            
        </div>
    );
};

export default Chef;


// "chef_picture": "https://i.postimg.cc/T33stbhP/woman1-min.jpg",
//         "chef_name": "Leila Hamdi",
//         "years_of_experience": 8,
//         "num_recipes": 5,
//         "likes": 800,
//         "recipe_ids": ["5", "6", "7", "8", "9"]