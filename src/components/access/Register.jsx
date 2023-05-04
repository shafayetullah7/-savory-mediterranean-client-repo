import React, { useContext, useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../authProvider/AuthProvider';


const Register = () => {
    const {createUser,setUser,updateUser,googleLogin,githubLogin,setLoading} = useContext(AuthContext);
    const [error,setError] = useState();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname;
    console.log(location);
    useEffect(()=>{
        setLoading(false);
    },[])


    const handleGoogleLogin = () =>{
        googleLogin()
        .then(result=>{
            console.log(result.user);
            navigate(from || '/',{replace:true});
        })
        .catch(err=>{
            console.log(err);
        })
    }
    const handleGithubLogin = () =>{
        githubLogin()
        .then(result=>{
            console.log(result.user);
            navigate(from || '/',{replace:true});
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();
        setError(null);
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        console.log(name,email,password,photo)

        if(!email){
            setError('Must provide an email!');
            return;
        }
        if(!password){
            setError('Must provide a password!');
            return;
        }
        if(password.length<6){
            setError('Password cannot be less than six character');
            return;
        }

        
        createUser(email,password)
        .then(result=>{
            updateUser({name,photo})
            .then(()=>{
                console.log('updated profile')
            })
            .catch(err=>{
                console.log(err.message);
            })
            form.reset();
            navigate(from || '/',{replace:true});
        })
        .catch(err=>{
            setError(err.message)
        })

    }
    return (
        <div className='w-full mt-10 flex justify-center items-center'>
            <div>
                <div className='md:px-11 md:mt-auto mt-10 px-2 py-9 border rounded-xl'>
                    <h1 className='text-3xl font-bold'>Create account</h1>
                    <form className='md:mt-16 mt-5 font-semibold px-2 w-full md:w-[350px]' onSubmit={handleSubmit}>

                        <input className='block w-full  outline-none border-b border-black py-1 placeholder:text-gray-600 placeholder:font-normal' type="text" name='name' placeholder='Enter Your Name'/>
                        <input className='block w-full outline-none border-b border-black py-1 placeholder:text-gray-600 placeholder:font-normal mt-7' type="email" name='email' placeholder='Enter Your Email'/>
                        <input className='block w-full outline-none border-b border-black py-1 placeholder:text-gray-600 placeholder:font-normal mt-7' type="password" name='password' placeholder='Password'/>
                        <input className='block w-full outline-none border-b border-black py-1 placeholder:text-gray-600 placeholder:font-normal mt-7' type="text" name='photo' placeholder='Photo URL'/>
                        

                        <input className='bg-amber-500 block w-full py-3 mt-12 cursor-pointer' type="submit" value={'Create an account'}/>
                    </form>

                    {error && <p className='mt-1 text-xs text-red-600'>Error: {error}</p>}
                    <p className='text-sm text-center mt-5'>Already have an account? <Link className='text-amber-500 font-semibold underline' to={'/login'} state={{from:location.state.from}} replace={true}>Login</Link></p>
                </div>
                
                <div className="divider mt-7 text-gray-600">OR</div>

                <div className='mt-5'>
                    <button className='flex justify-between items-center w-[280px] mx-auto border p-1 rounded-full' onClick={handleGithubLogin}>
                        <FaGithub className='text-3xl'></FaGithub>
                        <p className='text-sm font-semibold text-gray-800'>Continue with Github</p>
                        <p></p>
                    </button>
                    <button className='flex justify-between items-center w-[280px] mx-auto border p-1 rounded-full mt-2' onClick={handleGoogleLogin}>
                        <FcGoogle className='text-3xl'></FcGoogle>
                        <p className='text-sm font-semibold text-gray-800'>Continue with Google</p>
                        <p></p>
                    </button>
                </div>
            </div>
            
        </div>
    );
};

export default Register;