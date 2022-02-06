import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Booking from '../Booking/Booking';

const ServiceDetails = () => {
    const [details, setDetails] = useState([]);
    const { detailsId } = useParams();
    console.log(detailsId);

    useEffect(() => {
        fetch(`https://polar-ridge-29451.herokuapp.com/services/details/${detailsId}`)
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [])

    console.log(details);

    return (
        <>
            <div className='container my-16 w-3/4 mx-auto'>
                <div>
                    <img src={details.img} className="" alt="" />

                    <div className='bg-green-100 pb-5'>
                        <h2 className='text-center py-3 text-secondary text-2xl font-semibold'>{details.title}</h2>
                        <div className='text-center space-x-5'>
                            <button><span className='text-xl'>Price</span>: <del className='text-red-500 text-2xl'>$ {details.price}</del></button>
                            <button><span className='text-xl'>Discount Price</span>: <span className='text-2xl text-primary'>$ {details.discount}</span></button>
                        </div>
                        <p className='p-2 text-center text-gray-600'>{details.details}</p>

                        <div className='flex justify-center mt-5'>
                            <button className='text-center bg-secondary text-white p-2 rounded-md'>Booking Now <i className="fas fa-angle-double-down ml-2"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <Booking details={details}/>
        </>
    );
};

export default ServiceDetails;