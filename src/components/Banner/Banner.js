import React from 'react';
import BannerPhoto from '../../asset/images/traveller.webp';
const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${BannerPhoto})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className="w-full bg-gray-500 bg-blend-multiply h-96">
            <div className='flex justify-center'>
                <div>
                    <h1 className='text-6xl font-semibold text-center pt-20 text-white uppercase opacity-75'>Never stop <br /> exploring</h1>
                    <h3 className='text-white text-xl font-medium text-center py-2'>Life is too short, So let's do trip.</h3>
                    <button className='text-white my-5 bg-secondary hover:bg-primary font-medium rounded-lg text-sm px-5 py-2.5'>Booking</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;