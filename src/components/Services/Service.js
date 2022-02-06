import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {

    return (
        <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="p-8 rounded-t-lg w-full h-60" src={service.img} alt="product image" />
            </a>
            <div className="px-5 pb-5">
                <a href="#">
                    <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{service.title}</h3>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <div className='space-x-1 text-yellow-400'>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${service.price}</span>
                    <Link to={`/services/details/${service._id}`} className="text-white bg-secondary hover:bg-primary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Booking</Link>
                </div>
            </div>
        </div>
    );
};

export default Service;