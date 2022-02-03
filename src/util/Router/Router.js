import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from '../../pages/Authentication/SignUp/SignUp';
import Home from '../../pages/Home/Home';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    );
};

export default Router;