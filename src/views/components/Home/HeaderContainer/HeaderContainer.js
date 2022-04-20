import React from 'react';
import styled from 'styled-components';
import { device } from '../../../../utils/screenSize';
import Header from './Header/Header';
import HeroSection from './HeroSection/HeroSection';



const HeaderContainer = () => {
    return (
        <Container>
            <Wraper>
                <Header />
                <HeroSection />
            </Wraper>
        </Container>
    );
};

export default HeaderContainer;










const Container = styled.header`
background: #D6D5E5;
clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 50% 90%, 0% 100%);

@media ${device.pad}{
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 50% 95%, 0% 100%);
}
@media ${device.mobile}{
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 50% 97%, 0% 100%);
}

`;
const Wraper = styled.div`
background: var(--section-background);
clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 50% 88%, 0% 100%);

@media ${device.pad}{
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 50% 93%, 0% 100%);
}
@media ${device.mobile}{
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 50% 95%, 0% 100%);
}
`;