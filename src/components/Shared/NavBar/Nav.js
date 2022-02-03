import React from 'react';

const Nav = () => {
    return (
        <nav className='container flex justify-between'>
            <div className="logo">
                <h1 className='text-2xl'>TourVilla</h1>
            </div>
            <div className="menu space-x-8">
                <a href="">Home</a>
                <a href="">Destination</a>
                <a href="">Discount</a>
                <a href="">About</a>
                <a href="">Blog</a>
                <a href="">Contact</a>
            </div>
        </nav>
    );
};

export default Nav;