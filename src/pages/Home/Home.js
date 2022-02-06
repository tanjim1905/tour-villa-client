import React from 'react';
import Banner from '../../components/Banner/Banner';
import Services from '../../components/Services/Services';
import Blogs from '../Blogs/Blogs';
import Destination from '../Destination/Destination';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <>
            <Banner />
            <Services />
            <Destination />
            <Testimonial />
            <Blogs />
        </>
    );
};

export default Home;