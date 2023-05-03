import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../authProvider/AuthProvider';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const Nav = () => {
    const {user,loading,logout} = useContext(AuthContext);

    const  handleLogout = ()=>{
        logout()
        .then(()=>{
            console.log('logged out');
        })
        .catch(err=>{
            console.log(err.message);
        })
    }
    // console.log(user);
    return (
        <div className="navbar bg-base-100 lg:px-24 bg-transparent">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive, isPending }) =>
                            isActive? "font-bold scale-110 duration-150": ""
                            }
                        >Home</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/blog'
                            className={({ isActive, isPending }) =>
                            isActive? "font-bold scale-110 duration-150": ""
                            }
                        >Blog</NavLink>
                    </li>
                </ul>
                </div>
                <a className="btn btn-ghost normal-case text-2xl text-left leading-5 text-gray-800 font-avro">Savory<br/>Mediterranean</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-5 px-1">
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive, isPending }) =>
                            isActive? "font-bold scale-110 duration-150": ""
                            }
                        >Home</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/blog'
                            className={({ isActive, isPending }) =>
                            isActive? "font-bold scale-110 duration-150": ""
                            }
                        >Blog</NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                {(user) && 
                <div className='flex gap-5 items-center'>
                    <Tooltip id="tooltip1" />
                    {user.photoURL && <img data-tooltip-id="tooltip1" data-tooltip-content={user.displayName} className='w-12 h-12 rounded-full' src={user.photoURL}/>}
                    <button className='btn bg-gray-800' onClick={handleLogout}>Logout</button>
                </div>}
                {(!user && !loading) && <Link className='btn bg-gray-800' to={'/login'}>Login</Link>}
            </div>
        </div>
    );
};

export default Nav;