import React from 'react';
import img from '../../asset/images/traveller.webp';

const Destination = () => {
    return (
        <div className='container my-16'>
            <h2 className='text-center text-2xl font-medium'>Our Destinations</h2>
            <h5 className='text-center capitalize text-xl pt-2 mb-6'>Choose your next destination</h5>

            <div className='grid lg:grid-cols-3 gap-6'>
                <div className='flex items-end justify-center h-96 hover:scale-105 transition duration-1000 bg-gray-500 bg-blend-multiply' style={{backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                    <div className='text-center my-5'>
                        <h3 className='pb-3 text-secondary text-xl'>$590</h3>
                        <h2 className='text-white text-2xl font-medium'>Rome, Italy</h2>
                    </div>
                </div>
                <div className='flex items-end justify-center h-96 hover:scale-105 transition duration-1000 bg-gray-500 bg-blend-multiply' style={{backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                    <div className='text-center my-5'>
                        <h3 className='pb-3 text-secondary text-xl'>$590</h3>
                        <h2 className='text-white text-2xl font-medium'>Rome, Italy</h2>
                    </div>
                </div>
                <div className='flex items-end justify-center h-96 hover:scale-105 transition duration-1000 bg-gray-500 bg-blend-multiply' style={{backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                    <div className='text-center my-5'>
                        <h3 className='pb-3 text-secondary text-xl'>$590</h3>
                        <h2 className='text-white text-2xl font-medium'>Rome, Italy</h2>
                    </div>
                </div>
                <div className='flex items-end justify-center h-96 hover:scale-105 transition duration-1000 bg-gray-500 bg-blend-multiply' style={{backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                    <div className='text-center my-5'>
                        <h3 className='pb-3 text-secondary text-xl'>$590</h3>
                        <h2 className='text-white text-2xl font-medium'>Rome, Italy</h2>
                    </div>
                </div>
                <div className='flex items-end justify-center h-96 hover:scale-105 transition duration-1000 bg-gray-500 bg-blend-multiply' style={{backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                    <div className='text-center my-5'>
                        <h3 className='pb-3 text-secondary text-xl'>$590</h3>
                        <h2 className='text-white text-2xl font-medium'>Rome, Italy</h2>
                    </div>
                </div>
                <div className='flex items-end justify-center h-96 hover:scale-105 transition duration-1000 bg-gray-500 bg-blend-multiply' style={{backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                    <div className='text-center my-5'>
                        <h3 className='pb-3 text-secondary text-xl'>$590</h3>
                        <h2 className='text-white text-2xl font-medium'>Rome, Italy</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;