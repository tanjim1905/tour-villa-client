import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ServiceDetails from '../../components/Services/Booking/ServiceDetails';
import Login from '../../pages/Authentication/Login/Login';
import SignUp from '../../pages/Authentication/SignUp/SignUp';
import BlogDetails from '../../pages/Blogs/BlogDetails';
import AddNewBlog from '../../pages/Dashboard/AddNewBlog';
import AddNewDestination from '../../pages/Dashboard/AddNewDestination';
import AddNewService from '../../pages/Dashboard/AddNewService';
import AllOrders from '../../pages/Dashboard/AllOrders';
import Dashboard from '../../pages/Dashboard/Dashboard';
import Home from '../../pages/Home/Home';
import Testimonial from '../../pages/Testimonial/Testimonial';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/destination" element={<AddNewDestination />} />
            <Route path="/service" element={<AddNewService />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/allorders" element={<AllOrders />} />
            <Route path="/services/details/:detailsId" element={<ServiceDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/addblogs" element={<AddNewBlog />} />
            <Route path="/blog/details/:blogId" element={<BlogDetails />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/blog" element={<PrivateRoute><AddNewBlog /></PrivateRoute>} />
        </Routes>
    );
};

export default Router;