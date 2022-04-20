import React from 'react';
import { Appointments, Blog, Department, Doctors, HeaderContainer, HomeFooter, Service, Testimonial } from '../components/Home';

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
            <HomeFooter />
        </>
    );
};

export default Homepage;