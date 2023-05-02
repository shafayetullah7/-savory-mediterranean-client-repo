import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div>
                <div className='px-11 py-9 border rounded-xl'>
                    <h1 className='text-3xl font-bold'>Login</h1>
                    <form className='mt-16 font-semibold'>
                        <input className='block w-[350px] outline-none border-b border-black py-1 placeholder:text-gray-600 placeholder:font-normal' type="email" name='email' placeholder='Email' />
                        <input className='block w-[350px] outline-none border-b border-black py-1 placeholder:text-gray-600 placeholder:font-normal font-bold mt-7' type="password" name='password' placeholder='Password' />
                        <div className='text-sm flex justify-between items-center mt-5' >
                            <p className='underline text-amber-500'>Forgot password</p>
                        </div>
                        <input className='bg-amber-500 block w-full py-3 mt-12' type="submit" value={'Login'}/>
                    </form>
                    <p className='text-sm text-center mt-5'>Don't have an account? <Link className='text-amber-500 font-semibold underline' to={'/register'} replace>Create an account</Link></p>
                </div>

                <div className="divider mt-7 text-gray-600">OR</div>

                <div className='mt-7'>
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

export default Login;