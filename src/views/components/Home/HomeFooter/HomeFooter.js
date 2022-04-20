import React from 'react';
import styled from 'styled-components';
import { device } from '../../../../utils/screenSize';
import { Footer } from '../../Shared';

const HomeFooter = () => {
    return (
        <Container>
            <Wraper className='section-side-padding'>

                <Footer />

            </Wraper>
            <CopyWright><span>©</span> Copy right 2022 all right reserved</CopyWright>
        </Container>
    );
};

export default HomeFooter;



const Container = styled.section`
background: #D6D5E5;
clip-path: polygon(0% 0%, 50% 11%, 100% 0%, 100% 100%, 0% 100%);

@media ${device.pad}{
    clip-path: polygon(0% 0%, 50% 11%, 100% 0%, 100% 100%, 0% 100%);
}
@media ${device.mobile}{
    clip-path: polygon(0% 0%, 50% 3%, 100% 0%, 100% 100%, 0% 100%);
}
`;
const Wraper = styled.div`
background: var(--section-background);
padding-top: 8rem;
padding-bottom: 2rem;
clip-path: polygon(0% 0%, 50% 15%, 100% 0%, 100% 100%, 0% 100%);

background-image: url('/img/footer.png');
background-repeat: no-repeat;
background-position: right 3% bottom;
background-size: 250px;

@media ${device.laptop}{
    background-size: 180px;
}
@media ${device.pad}{
    clip-path: polygon(0% 0%, 50% 15%, 100% 0%, 100% 100%, 0% 100%);
}
@media ${device.mobile}{
    clip-path: polygon(0% 0%, 50% 5%, 100% 0%, 100% 100%, 0% 100%);
    padding-top: 4rem;
}
`;

const CopyWright = styled.p`
color: #fff;
text-align: center;
border-top: 1px solid #527ABE;
background: var(--section-background);
padding: 1rem 0rem;

span{
    margin-right: 5px;
}
`;