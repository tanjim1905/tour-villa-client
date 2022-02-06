import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://polar-ridge-29451.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])
    return (
        <div className='container my-16'>
            <h2 className='text-center text-2xl font-medium'>Our Blog</h2>
            <p className='text-center capitalize text-xl mt-2 mb-6'>See our daily news & updates</p>
            <div className='grid lg:grid-cols-2 gap-12'>
                {
                    blogs.map((blog) => <Blog key={blog._id} blog={blog} />)
                }
            </div>
        </div>
    );
};

export default Blogs;