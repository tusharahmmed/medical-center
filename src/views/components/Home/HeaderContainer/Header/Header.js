import React from 'react';
import styled from 'styled-components';
import { device } from '../../../../../utils/screenSize';
import { Twirl as Hamburger } from 'hamburger-react'

const Header = () => {


    const MenuLinks = () => (
        <>
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">Departments</a>
            <a href="#">Doctor</a>
            <a href="#">Blog</a>
            <a href="#">Testimonial</a>
            <a href="#">Appointment</a>
        </>
    );


    return (
        <Container>

            <LeftSide>
                <img src="/img/logo.png" alt="" />
            </LeftSide>

            <RightSide>
                <DesktopMenu>
                    <MenuLinks />
                </DesktopMenu>
                <MobileMenu>
                    <Hamburger />
                </MobileMenu>
            </RightSide>

        </Container>
    );
};

export default Header;






const Container = styled.section`
display: flex;
justify-content: space-between;
align-items: center;

padding: 2rem 10% ;

@media ${device.laptop}{
    padding: 2rem 3%;
}
`;

const LeftSide = styled.div`

`;

const RightSide = styled.div`

`;
const DesktopMenu = styled.nav`

@media ${device.pad}{
    display: none;
}

a{
    color: #fff;
    text-decoration: none;
    margin: 0 10px;
    font-size: 16px;
    font-weight: 500;
    padding: 5px 10px;

    @media ${device.laptop}{
        margin: 0 5px;
        padding: 5px 7px;
    }
    
}
`;

const MobileMenu = styled.div`
display: none;

@media ${device.pad}{
    display: block;
    color: #fff;
}
`;