import React from 'react';
import { Department, Doctors, HeaderContainer, Service } from '../components/Home';

const Homepage = () => {
    return (
        <>
        <HeaderContainer />
        <Service />
        <Department />
        <Doctors />
        </>
    );
};

export default Homepage;