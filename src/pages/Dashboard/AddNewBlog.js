import React from 'react';
import { useForm } from 'react-hook-form';

const AddNewBlog = () => {
    const { register, handleSubmit } = useForm();

    const addNewService = data => {
        fetch("http://localhost:7000/blogs", {
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
                <h2>Add a new blog</h2>
                <form onSubmit={handleSubmit(addNewService)} className="mt-6">
                    <div className="my-5 text-sm">
                        <label htmlFor="img" className="block text-black">Image</label>
                        <div className="flex items-center relative">
                            <i className="far fa-user text-gray-300 text-md absolute left-4 bottom-4"></i>
                            <input {...register("img")} type="text" className='pl-10 py-3 mt-3 focus:outline-none border border-gray-200 focus:border-primary w-full rounded-md' autoFocus id="username" placeholder="Add an Image Link" />
                        </div>
                    </div>
                    <div className="my-5 text-sm">
                        <label htmlFor="title" className="block text-black">Title</label>
                        <div className="flex items-center relative">
                            <i className="far fa-envelope text-gray-300 text-md absolute left-4 bottom-4"></i>
                            <input {...register("title")} type="text" className='pl-10 py-3 mt-3 focus:outline-none border border-gray-200 focus:border-primary w-full rounded-md' autoFocus id="username" placeholder="Product Name" />
                        </div>
                    </div>
                    <div className="my-5 text-sm">
                        <label htmlFor="description" className="block text-black">Description</label>
                        <div className="flex items-center relative">
                            <i className="fas fa-lock text-gray-300 text-md absolute left-4 bottom-4"></i>
                            <input {...register("description")} type="text" className='pl-10 py-3 mt-3 focus:outline-none border border-gray-200 focus:border-primary w-full rounded-md' autoFocus id="username" placeholder="description" />
                        </div>
                    </div>
                    <div className="my-5 text-sm">
                        <label htmlFor="details" className="block text-black">Details</label>
                        <div className="flex items-center relative">
                            <i className="fas fa-lock text-gray-300 text-md absolute left-4 bottom-4"></i>
                            <input {...register("details")} type="text" className='pl-10 py-3 mt-3 focus:outline-none border border-gray-200 focus:border-primary w-full rounded-md' autoFocus id="username" placeholder="Details" />
                        </div>
                    </div>

                    <button type='submit' className="block text-center text-white bg-primary p-3 duration-300 hover:bg-green-700 w-full rounded-md">Add Blog</button>
                </form>
            </div>
        </div>
    );
};

export default AddNewBlog;