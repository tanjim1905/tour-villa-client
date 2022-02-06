import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logout } = useAuth();
    return (
        <div>
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Link to={"/"}>
                                    <h1 className='text-2xl font-medium hover:border px-3 py-2 rounded-lg hover:border-primary'><span className='text-primary'>Tour</span><span className="text-secondary">Villa</span></h1>
                                </Link>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <div className="text-white space-x-4">
                                        <Link className="hover:text-primary" to={"/home"}>Home</Link>
                                        <Link className="hover:text-primary" to={"/blog"}>Add New Blog</Link>
                                        <Link className="hover:text-primary" to={"/service"}>Add New Service</Link>
                                        <Link className="hover:text-primary" to={"/allorders"}>My Orders</Link>
                                        <Link className="hover:text-primary" to={"/all product"}>Manage All Orders</Link>
                                        <Link className="hover:text-primary" to={"/all product"}>Add New Destination</Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <div className="flex flex-col ml-5 text-white">
                                    <Link className="hover:text-primary" to={"/home"}>Home</Link>
                                    <Link className="hover:text-primary" to={"/about"}>About</Link>
                                    <Link className="hover:text-primary" to={"/contact"}>Contact Us</Link>
                                    <button>Dashboard</button>
                                    <Link className="hover:text-primary" to={"/blog"}>Add New Blog</Link>
                                    <Link className="hover:text-primary" to={"/service"}>Add New Service</Link>
                                    <Link className="hover:text-primary" to={"/allorders"}>My Orders</Link>
                                    <Link className="hover:text-primary" to={"/all product"}>Manage All Orders</Link>
                                </div>

                                <div className="text-white text-center py-2">
                                    {!user.email ? <div className='space-x-4'>
                                        <Link to={"/login"}><i className='fas fa-user mr-1'></i> Login</Link>
                                        <Link to={"/signup"}><i className='fas fa-sign-in-alt mr-1'></i> Sign Up</Link>
                                    </div> : <button onClick={logout} to={"/signup"}><i className='fas fa-sign-in-alt mr-1'></i> Logout</button>}
                                </div>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
    );
}

export default Nav;



{/*

    <Link to={"/home"}>Home</Link>
    <Link to={"/testimonial"}>Testimonial</Link>
    <Link to={"/destination"}>Add Destination</Link>
    <Link to={"/blog"}>Add New Blog</Link>
    <Link to={"/service"}>Add New Service</Link>
    <Link to={"/orders"}>My Orders</Link>
    <Link to={"/all product"}>Manage All Products</Link>
    {!user.email ? <Link to={"/login"}>Login</Link> : <span><button onClick={logout} className="logout">
        Logout
    </button>
        <button>{user.email}</button></span>}
*/}