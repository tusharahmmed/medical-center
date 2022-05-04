import React from 'react';
import styled from 'styled-components';
import { device } from '../../../../../utils/screenSize';
import { Twirl as Hamburger } from 'hamburger-react'

const Header = () => {


    const MenuLinks = () => (
        <>
            <a href="#">Home</a>
            <a href="#service">Services</a>
            <a href="#departments">Departments</a>
            <a href="#doctor">Doctor</a>
            <a href="#blog">Blog</a>
            <a href="#testimonial">Testimonial</a>
            <a href="#appointment">Appointment</a>
        </>
    );


    return (
        <Container>

            <LeftSide>
                <a href="./"><img src="/img/logo.png" alt="" /></a>
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
background: var(--section-background);
padding: 2rem 10% ;

@media ${device.laptop}{
    padding: 2rem 3%;
}
@media ${device.pad}{
    position: sticky;
    top: 0;
    height: 100px;
    z-index: 999;
}
@media ${device.pad}{
    height: 80px;
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