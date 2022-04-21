import React from 'react';
import styled from 'styled-components';
import { device } from '../../../../utils/screenSize';
import { Footer } from '../../Shared';
import { FaHeart } from 'react-icons/fa';

const HomeFooter = () => {
    return (
        <Container>
            <Wraper className='section-side-padding'>

                <Footer />

            </Wraper>

            <FooterBottom>

            <Designer>Designed with <FaHeart color='#D7120D' /> by <a href="https://www.facebook.com/rajib.sing.988" target="_blank">Albert</a> and Developed by <a href="https://www.linkedin.com/in/tusharahmmed/" target="_blank">Tushar</a></Designer>

            <CopyWright><span>©</span> Copy right 2022 all right reserved</CopyWright>

            </FooterBottom>

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

const FooterBottom = styled.div`
padding: 1rem 0rem;
border-top: 1px solid #527ABE;
background: var(--section-background);
position: relative;
`;
const Designer = styled.p`
position: absolute;
left: 1rem;
top: 1rem;
color: #c9c4c48c;

a{
    color: #01974d;
}
`;

const CopyWright = styled.p`
color: #fff;
text-align: center;



span{
    margin-right: 5px;
}
`;