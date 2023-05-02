import React, { useContext, useState } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../authProvider/AuthProvider';

const Register = () => {
    // const {createUser,setUser} = useContext(AuthContext);
    const [error,setError] = useState();
    const navigate = useNavigate();
    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email;
        const password = form.password;
        
        // createUser(email,password)
        // .then(result=>{
            
        //     setUser(result.user);
        //     form.reset();
        //     navigate('/');
        // })
        // .catch(err=>{
        //     setError(err.message)
        // })

    }
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div>
                <div className='px-11 py-9 border rounded-xl'>
                    <h1 className='text-3xl font-bold'>Create account</h1>
                    <form className='mt-16 font-semibold' onSubmit={handleSubmit}>

                        <input className='block w-[350px] outline-none border-b border-black py-1 placeholder:text-gray-600 placeholder:font-normal mt-7' type="text" name='name' placeholder='Enter Your Name' />
                        <input className='block w-[350px] outline-none border-b border-black py-1 placeholder:text-gray-600 placeholder:font-normal mt-7' type="email" name='email' placeholder='Enter Your Email' />
                        <input className='block w-[350px] outline-none border-b border-black py-1 placeholder:text-gray-600 placeholder:font-normal mt-7' type="password" name='password' placeholder='Password' />
                        

                        <div className='text-sm flex justify-between items-center mt-5' >
                            <p className='underline text-amber-500'>Forgot password</p>
                        </div>

                        <input className='bg-amber-500 block w-full py-3 mt-12' type="submit" value={'Create an account'}/>
                    </form>

                    <p>{error}</p>
                    <p className='text-sm text-center mt-5'>Already have an account? <Link className='text-amber-500 font-semibold underline' to={'/login'} replace>Login</Link></p>
                </div>
                
                <div className="divider mt-7 text-gray-600">OR</div>

                <div className='mt-5'>
                    <button className='flex justify-between items-center w-[280px] mx-auto border p-1 rounded-full'>
                        <FaFacebook className='text-3xl text-blue-600'></FaFacebook>
                        <p className='text-sm font-semibold text-gray-800'>Continue with Facebook</p>
                        <p></p>
                    </button>
                    <button className='flex justify-between items-center w-[280px] mx-auto border p-1 rounded-full mt-2'>
                        <FcGoogle className='text-3xl text-blue-600'></FcGoogle>
                        <p className='text-sm font-semibold text-gray-800'>Continue with Google</p>
                        <p></p>
                    </button>
                </div>
            </div>
            
        </div>
    );
};

export default Register;