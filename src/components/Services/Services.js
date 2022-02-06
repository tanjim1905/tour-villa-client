import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("https://polar-ridge-29451.herokuapp.com/services")
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className='container my-16'>
            <h2 className='text-center text-2xl font-medium'>Our Services</h2>
            <p className='text-center text-xl'>We offer the following services</p>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6'>
                {
                    services.map((service) => <Service key={service._id} service={service}/>)
                }
            </div>
        </div>
    );
};

export default Services;