import React from 'react';
import Nav from './Nav';
import NavTop from './NavTop';

const NavBar = () => {
    return (
        <div className='bg-gray-800 py-4'>
            <NavTop />
            <Nav />
        </div>
    );
};

export default NavBar;