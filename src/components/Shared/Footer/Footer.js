import React from 'react';

const Footer = () => {
    return (
        <div className='mt-10 bg-gray-800 py-16'>
            <div className="container">
                <div className='grid lg:grid-cols-3 gap-6 items-center'>
                    <div>
                        <h2 className='text-white text-2xl my-4 font-semibold'>About TourVilla</h2>
                        <p className='text-stone-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus ipsam aliquam ex rem iure, cum voluptate excepturi animi aut commodi quod assumenda! Sequi, cupiditate sit! Excepturi eaque impedit nostrum repellendus.</p>
                    </div>

                    <div>
                        <h2 className='text-white text-2xl my-4 font-semibold'>Navigations</h2>
                        <div className='grid lg:grid-cols-2 gap-y-5 text-stone-500'>
                            <a className='hover:text-white' href="">Home</a>
                            <a className='hover:text-white' href="">About Us</a>
                            <a className='hover:text-white' href="">Services</a>
                            <a className='hover:text-white' href="">Destination</a>
                            <a className='hover:text-white' href="">Privacy Policy</a>
                            <a className='hover:text-white' href="">Contact Us</a>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-white text-2xl my-4 font-semibold'>Subscriber Newsteller</h2>
                        <p className='text-stone-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, recusandae?</p>

                        <div className='border border-primary flex justify-between mt-3 rounded-md'>
                            <input className='w-full bg-transparent pl-2 focus:none' type="text" name="" id="" placeholder='Enter Email' />
                            <button className='bg-secondary p-4 rounded-md'>Send</button>
                        </div>
                    </div>
                </div>

                <div className='mt-10'>
                    <div className='text-center space-x-8'>
                        <i className="text-gray-400 hover:text-gray-600 fab fa-facebook-f"></i>
                        <i className="text-gray-400 hover:text-gray-600 fab fa-twitter"></i>
                        <i className="text-gray-400 hover:text-gray-600 fab fa-instagram"></i>
                        <i className="text-gray-400 hover:text-gray-600 fab fa-linkedin-in"></i>
                    </div>
                    <p className='text-center py-5 text-stone-500'>Copyright ©2022 All rights reserved | This template is made by Tanjim Ahmed</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;