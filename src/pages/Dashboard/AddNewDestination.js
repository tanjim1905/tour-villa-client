import React from 'react';
import { useForm } from 'react-hook-form';

const AddNewDestination = () => {
    const { register, handleSubmit } = useForm();

    const addNewDestination = data => {
        fetch("http://localhost:7000/destination", {
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
                <h2>Add a new destination</h2>
                <form onSubmit={handleSubmit(addNewDestination)} className="mt-6">
                    <div className="my-5 text-sm">
                        <label htmlFor="img" className="block text-black">Image</label>
                        <div className="flex items-center relative">
                            <i className="far fa-user text-gray-300 text-md absolute left-4 bottom-4"></i>
                            <input {...register("img")} type="text" className='pl-10 py-3 mt-3 focus:outline-none border border-gray-200 focus:border-primary w-full rounded-md' autoFocus id="username" placeholder="Add an Image Link" />
                        </div>
                    </div>
                    <div className="my-5 text-sm">
                        <label htmlFor="country" className="block text-black">Country</label>
                        <div className="flex items-center relative">
                            <i className="far fa-envelope text-gray-300 text-md absolute left-4 bottom-4"></i>
                            <input {...register("country")} type="text" className='pl-10 py-3 mt-3 focus:outline-none border border-gray-200 focus:border-primary w-full rounded-md' autoFocus id="username" placeholder="Product Name" />
                        </div>
                    </div>
                    <div className="my-5 text-sm">
                        <label htmlFor="country" className="block text-black">City</label>
                        <div className="flex items-center relative">
                            <i className="far fa-envelope text-gray-300 text-md absolute left-4 bottom-4"></i>
                            <input {...register("city")} type="text" className='pl-10 py-3 mt-3 focus:outline-none border border-gray-200 focus:border-primary w-full rounded-md' autoFocus id="username" placeholder="City" />
                        </div>
                    </div>
                    <div className="my-5 text-sm">
                        <label htmlFor="password" className="block text-black">Price</label>
                        <div className="flex items-center relative">
                            <i className="fas fa-lock text-gray-300 text-md absolute left-4 bottom-4"></i>
                            <input {...register("price")} type="number" className='pl-10 py-3 mt-3 focus:outline-none border border-gray-200 focus:border-primary w-full rounded-md' autoFocus id="username" placeholder="Price" />
                        </div>
                    </div>
                    <div className="my-5 text-sm">
                        <label htmlFor="discount" className="block text-black">Discount</label>
                        <div className="flex items-center relative">
                            <i className="fas fa-lock text-gray-300 text-md absolute left-4 bottom-4"></i>
                            <input {...register("discount")} type="number" className='pl-10 py-3 mt-3 focus:outline-none border border-gray-200 focus:border-primary w-full rounded-md' autoFocus id="username" placeholder="discount" />
                        </div>
                    </div>
                    <div className="my-5 text-sm">
                        <label htmlFor="day" className="block text-black">Days</label>
                        <div className="flex items-center relative">
                            <i className="fas fa-lock text-gray-300 text-md absolute left-4 bottom-4"></i>
                            <input {...register("days")} type="number" className='pl-10 py-3 mt-3 focus:outline-none border border-gray-200 focus:border-primary w-full rounded-md' autoFocus id="username" placeholder="days" />
                        </div>
                    </div>
                    <div className="my-5 text-sm">
                        <label htmlFor="nights" className="block text-black">Nights</label>
                        <div className="flex items-center relative">
                            <i className="fas fa-lock text-gray-300 text-md absolute left-4 bottom-4"></i>
                            <input {...register("nights")} type="number" className='pl-10 py-3 mt-3 focus:outline-none border border-gray-200 focus:border-primary w-full rounded-md' autoFocus id="username" placeholder="nights" />
                        </div>
                    </div>
                    <div className="my-5 text-sm">
                        <label htmlFor="details" className="block text-black">Details</label>
                        <div className="flex items-center relative">
                            <i className="fas fa-lock text-gray-300 text-md absolute left-4 bottom-4"></i>
                            <input {...register("details")} type="text" className='pl-10 py-3 mt-3 focus:outline-none border border-gray-200 focus:border-primary w-full rounded-md' autoFocus id="username" placeholder="Details" />
                        </div>
                    </div>

                    <button type='submit' className="block text-center text-white bg-primary p-3 duration-300 hover:bg-green-700 w-full rounded-md">Add a destination</button>
                </form>
            </div>
        </div>
    );
};

export default AddNewDestination;