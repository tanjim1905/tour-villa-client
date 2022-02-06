import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
    const [blog, setBlog] = useState([]);
    const { blogId } = useParams();
    console.log(blogId);

    useEffect(() => {
        fetch(`http://localhost:7000/blog/details/${blogId}`)
            .then(res => res.json())
            .then(data => setBlog(data));
    }, [])

    console.log(blog);

    return (
        <>
            <div className='container my-16 w-3/4 mx-auto'>
                <div>
                    <img src={blog.img} className="" alt="" />

                    <div className='bg-green-100 pb-5'>
                        <h2 className='text-center py-3 text-secondary text-2xl font-semibold'>{blog.title}</h2>
                        <p className='p-2 text-center text-gray-600'>{blog.details}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetails;