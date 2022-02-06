import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({blog}) => {
    return (
        <div className='p-4 shadow-lg rounded-md'>
            <img className='rounded w-full h-80' src={blog.img} alt="" />
            <h3 className='mt-6 text-secondary text-2xl'>{blog.title}</h3>
            <p className='my-4'>{blog.description}</p>
            <Link to={`/blog/details/${blog._id}`} className='text-xl font-medium transition duration-300 border-primary text-white hover:bg-primary hover:border-secondary rounded-md bg-secondary he px-3 py-2'>Read more</Link>
        </div>
    );
};

export default Blog;