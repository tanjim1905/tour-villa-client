import React from 'react';
import travellar from '../../asset/images/traveller.webp';

const Testimonial = () => {
    return (
        <div className='container my-16'>
            <h2 className='text-center text-2xl font-medium'>Testimonial</h2>
            <p className='text-center text-xl mt-2 mb-8'>Feedback our respective clients.</p>

            <div className='grid lg:grid-cols-3'>
                <div className='relative shadow-xl'>
                    <p className='text-center px-4 pt-8 pb-16 bg-primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, modi non ipsum rem accusamus architecto maiores doloribus cupiditate ipsam, autem facere reprehenderit praesentium eligendi magnam quos nesciunt beatae totam ipsa!</p>
                    <div className='absolute left-28 bottom-24'>
                        <img src={travellar} className="h-24 w-24 rounded-full border-8 border-white" alt="" />
                    </div>
                    <div className='text-center mt-16'>
                        <div className='space-x-5 py-2'>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <h4 className='pb-4'>David</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;