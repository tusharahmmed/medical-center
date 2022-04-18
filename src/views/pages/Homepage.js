import React from 'react';
import { Blog, Department, Doctors, HeaderContainer, Service } from '../components/Home';

const Homepage = () => {
    return (
        <>
        <HeaderContainer />
        <Service />
        <Department />
        <Doctors />
        <Blog />
        </>
    );
};

export default Homepage;