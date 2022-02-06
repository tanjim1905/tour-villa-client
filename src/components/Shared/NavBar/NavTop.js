import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const NavTop = () => {
    const {user, logout} = useAuth();
    return (
        <div className='hidden lg:block'>
            <div className='container flex justify-between items-center px-6 text-white'>
                <div className='flex space-x-12'>
                    <p><i className='fas fa-phone-alt'></i> +123 4567 8900</p>
                    <p><i className='fas fa-envelope'></i> tanjimahmed1905@gmail.com</p>
                </div>
                <div className='flex space-x-10 items-center'>
                    <div className='flex space-x-4'>
                        <i className='fab fa-facebook-f'></i>
                        <i className='fab fa-google-plus-g'></i>
                        <i className='fab fa-linkedin-in'></i>
                        <i className='fab fa-youtube'></i>
                    </div>
                    {!user.email ? <div className='space-x-4'>
                        <Link to={"/login"}><i className='fas fa-user mr-1'></i> Login</Link>
                        <Link to={"/signup"}><i className='fas fa-sign-in-alt mr-1'></i> Sign Up</Link>
                    </div> : <button onClick={logout} to={"/signup"}><i className='fas fa-sign-in-alt mr-1'></i> Logout</button>}
                </div>
            </div>
        </div>
    );
};

export default NavTop;