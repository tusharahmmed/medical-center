import React from 'react';
import { Blog, Department, Doctors, HeaderContainer, Service, Testimonial } from '../components/Home';

const Homepage = () => {
    return (
        <>
        <HeaderContainer />
        <Service />
        <Department />
        <Doctors />
        <Blog />
        <Testimonial />
        </>
    );
};

export default Homepage;