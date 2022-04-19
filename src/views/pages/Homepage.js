import React from 'react';
import { Appointments, Blog, Department, Doctors, HeaderContainer, Service, Testimonial } from '../components/Home';

const Homepage = () => {
    return (
        <>
        <HeaderContainer />
        <Service />
        <Department />
        <Doctors />
        <Blog />
        <Testimonial />
        <Appointments />
        </>
    );
};

export default Homepage;