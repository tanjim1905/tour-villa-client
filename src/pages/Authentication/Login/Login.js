import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle, registerWithEmailPassword } = useFirebase();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const email = data.email;
        const password = data.password;
        registerWithEmailPassword(email, password);
    }
    return (
        <div className="bg-white lg:w-6/12 md:6/12 w-10/12 my-10 border border-gray-200 mx-auto rounded-lg">
            <div className="py-8 px-8 rounded-xl">
                <h1 className="font-bold text-3xl mt-3 text-center">Log In</h1>
                <h4 className="text-md mt-3 text-center text-gray-500">Please login</h4>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                    <div className="my-5 text-sm">
                        <label htmlFor="username" className="block text-black">Email</label>
                        <div className="flex items-center relative">
                            <i className="far fa-envelope text-gray-300 text-md absolute left-4 bottom-4"></i>
                            <input {...register("email")} type="email" className='pl-10 py-3 mt-3 focus:outline-none border border-gray-200 focus:border-primary w-full rounded-md' autoFocus id="username" placeholder="john@gmail.com" />
                        </div>
                    </div>
                    <div className="my-5 text-sm">
                        <label htmlFor="password" className="block text-black">Password</label>
                        <div className="flex items-center relative">
                            <i className="fas fa-lock text-gray-300 text-md absolute left-4 bottom-4"></i>
                            <input {...register("password")} type="password" className='pl-10 py-3 mt-3 focus:outline-none border border-gray-200 focus:border-primary w-full rounded-md' autoFocus id="username" placeholder="Password" />
                        </div>
                    </div>

                    <button type='submit' className="block text-center text-white bg-primary p-3 duration-300 hover:bg-green-700 w-full rounded-md">Login</button>
                </form>

                <div className="text-center">
                    <p className="my-5"> OR </p>
                </div>

                <div className="grid md:grid-cols-2 gap-2 mt-7">
                    <div>
                        <button className="w-full text-sm flex items-center justify-center text-gray-600 font-medium bg-gray-100 p-3 duration-300 rounded-md hover:bg-blue-600 hover:text-white"><i className='fab fa-facebook-f mr-2'></i> Login With Facebook</button>
                    </div>
                    <div>
                        <button onClick={signInWithGoogle} className="w-full text-sm flex items-center justify-center text-gray-600 font-medium bg-gray-100 p-3 duration-300 rounded-md hover:bg-red-500 hover:text-white"><i className='fab fa-google mr-2'></i> Login With Google</button>
                    </div>
                </div>

                <p className="mt-12 text-center text-gray-400"> Don't have an account? <Link  to="/signup" className="text-black font-medium hover:text-primary"> Sign Up </Link>  </p>

            </div>
        </div>
    );
};

export default Login;