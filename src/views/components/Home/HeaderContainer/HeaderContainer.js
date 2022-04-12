import React from 'react';
import styled from 'styled-components';
import Header from './Header/Header';



const HeaderContainer = () => {
    return (
        <Container>
            <Wraper>
                <Header />
            </Wraper>
        </Container>
    );
};

export default HeaderContainer;










const Container = styled.header`
// background: #D6D5E5;
// clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 50% 75%, 0% 100%);

`;
const Wraper = styled.div`
background: var(--section-background);
// clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 50% 70%, 0% 100%);
padding-bottom: 20rem;
// background-image: url("/img/line.png");
// background-repeat: no-repeat;
`;