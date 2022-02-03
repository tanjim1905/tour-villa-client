import React, { useState } from 'react';
import Login from '../../../pages/Authentication/Login/Login';

const NavTop = () => {
    const [showLogin, setShowLogin] = useState(false);
    return (
        <div className='container flex justify-between items-center px-6'>
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
                <div className='space-x-4'>
                    <button onClick={() => setShowLogin(true)}><i className='fas fa-user mr-1'></i> Login</button>
                    <button><i className='fas fa-sign-in-alt mr-1'></i> Sign Up</button>
                </div>
            </div>

            {showLogin && <Login showLogin={showLogin} setShowLogin={setShowLogin} />}
        </div>
    );
};

export default NavTop;