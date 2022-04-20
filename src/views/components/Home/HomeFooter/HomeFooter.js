import React from 'react';
import styled from 'styled-components';
import { Footer } from '../../Shared';

const HomeFooter = () => {
    return (
        <Container>
            <Wraper className='section-side-padding'>
                <Footer />
            </Wraper>
        </Container>
    );
};

export default HomeFooter;



const Container = styled.section`
background: #D6D5E5;

`;
const Wraper = styled.div`
background: var(--section-background);
padding-top: 8rem;
padding-bottom: 2rem;
`;