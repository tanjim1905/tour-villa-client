import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Booking = ({ details }) => {
    const { register, handleSubmit } = useForm();
    const { user } = useAuth();

    const addNewOrder = data => {
        fetch("http://localhost:7000/allorders", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {

            })
        console.log(data);


    }
    return (
        <div className='bg-white lg:w-6/12 md:6/12 w-10/12 my-10 border border-gray-200 mx-auto rounded-lg'>
            <div className='py-8 px-8 rounded-xl'>
                <h2>Add Your Infomation</h2>
                <form onSubmit={handleSubmit(addNewOrder)} className="mt-6">
                    <div className="my-5 text-sm">
                        <label htmlFor="title" className="block text-black">Product Name</label>
                        <div className="flex items-center relative">
                            <i className="far fa-envelope text-gray-300 text-md absolute left-4 bottom-4"></i>
                            <input {...register("title")} defaultValue={details.title} type="text" className='pl-10 py-3 mt-3 focus:outline-none border border-gray-200 focus:border-primary w-full rounded-md' autoFocus id="username" placeholder="Product Name" />
                        </div>
                    </div>
                    <div className="my-5 text-sm">
                        <label htmlFor="title" className="block text-black">Email</label>
                        <div className="flex items-center relative">
                            <i className="far fa-envelope text-gray-300 text-md absolute left-4 bottom-4"></i>
                            <input {...register("email")} defaultValue={user.email} type="text" className='pl-10 py-3 mt-3 focus:outline-none border border-gray-200 focus:border-primary w-full rounded-md' autoFocus id="username" placeholder="Your Email" />
                        </div>
                    </div>
                    <div className="my-5 text-sm">
                        <label htmlFor="title" className="block text-black">Name</label>
                        <div className="flex items-center relative">
                            <i className="far fa-envelope text-gray-300 text-md absolute left-4 bottom-4"></i>
                            <input {...register("name")} defaultValue={user.name} type="text" className='pl-10 py-3 mt-3 focus:outline-none border border-gray-200 focus:border-primary w-full rounded-md' autoFocus id="username" placeholder="Your Name" />
                        </div>
                    </div>
                    <div className="my-5 text-sm">
                        <label htmlFor="title" className="block text-black">Address</label>
                        <div className="flex items-center relative">
                            <i className="far fa-envelope text-gray-300 text-md absolute left-4 bottom-4"></i>
                            <input {...register("name")} type="text" className='pl-10 py-3 mt-3 focus:outline-none border border-gray-200 focus:border-primary w-full rounded-md' autoFocus id="username" placeholder="Your Address" />
                        </div>
                    </div>
                    <div className="my-5 text-sm">
                        <label htmlFor="password" className="block text-black">Phone</label>
                        <div className="flex items-center relative">
                            <i className="fas fa-lock text-gray-300 text-md absolute left-4 bottom-4"></i>
                            <input {...register("price")} defaultValue={details.discount} type="number" className='pl-10 py-3 mt-3 focus:outline-none border border-gray-200 focus:border-primary w-full rounded-md' autoFocus id="username" placeholder="Your Number" />
                        </div>
                    </div>
                    <div className="my-5 text-sm">
                        <label htmlFor="password" className="block text-black">Price</label>
                        <div className="flex items-center relative">
                            <i className="fas fa-lock text-gray-300 text-md absolute left-4 bottom-4"></i>
                            <input {...register("price")} defaultValue={details.discount} type="number" className='pl-10 py-3 mt-3 focus:outline-none border border-gray-200 focus:border-primary w-full rounded-md' autoFocus id="username" placeholder="Price" />
                        </div>
                    </div>

                    <button type='submit' className="block text-center text-white bg-primary p-3 duration-300 hover:bg-green-700 w-full rounded-md">Book Now</button>
                </form>
            </div>
        </div>
    );
};

export default Booking;