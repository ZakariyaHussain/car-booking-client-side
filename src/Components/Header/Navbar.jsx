import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext';

const Navbar = () => {
    const { user, userSignOut } = use(AuthContext)
    const links = <>
        <li className='font-bold'><NavLink to='/'>Home</NavLink></li>
        <li className='font-bold'><NavLink to='availableCars'>Available Cars</NavLink></li>
        <li className='font-bold'><NavLink to='addCar'>Add Car</NavLink></li>
        <li className='font-bold'><NavLink to='myCars'>My Cars</NavLink></li>
        <li className='font-bold'><NavLink to='myBookings'>My Bookings</NavLink></li>
    </>

    //dark mode
    const darkMode = () => {
        const element = document.body;
        element.classList.toggle("dark-mode");
    }

    const handleSignout = () => {
        userSignOut()
            .then(() => {
                //console.log('Signout Successful');

            })
            .then(error => {
                //console.log(error);
                return (error.message);
            })
    }
    return (
        <div className="navbar bg-base-100 text-black shadow-sm px-5 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            user ? <>{links}</> : <>
                                <li className='font-bold'><NavLink to='/'>Home</NavLink></li>
                                <li className='font-bold'><NavLink to='availableCars'>Available Cars</NavLink></li>
                            </>
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Ride<span className='text-green-400'>Hub</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        user ? <>{links}</> : <>
                            <li className='font-bold'><NavLink to='/'>Home</NavLink></li>
                            <li className='font-bold'><NavLink to='availableCars'>Available Cars</NavLink></li>
                        </>
                    }

                </ul>
            </div>

            <div className="navbar-end">
                {user ? <>
                    <div className='flex items-center gap-4'>
                        <a onClick={handleSignout} className="btn mr-4">Logout</a>
                    </div>
                </> : <>
                    <Link to='/login'> <button className='btn mr-4'>Login</button></Link>
                    {/* <Link to='/register'> <button className='btn mr-4'>Register</button></Link> */}
                </>}

                {/* dark mode button */}
                {/* <button onClick={darkMode} className='btn'>Dark/Light</button> */}

            </div>
        </div>
    );
};

export default Navbar;