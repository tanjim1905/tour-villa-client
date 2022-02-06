import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllOrders = () => {
    const [allOrders, setMyAllOrders] = useState([]);

    useEffect(() => {
        fetch('https://polar-ridge-29451.herokuapp.com/allorders')
        .then(res => res.json())
        .then(data => setMyAllOrders(data))
    }, [])

    console.log(allOrders);
    return (
        <div>
            <h2>Here is your all orders</h2>
            <p>We offer the following services</p>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 space-x-5 space-y-5'>
                <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div className="px-5 pb-5">
                        <a href="#">
                            <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{allOrders.title}</h3>
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
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">${allOrders.price}</span>
                            <Link to={`/services/details/${allOrders._id}`} className="text-white bg-secondary hover:bg-primary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Booking</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllOrders;