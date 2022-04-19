import React from 'react';
import styled from 'styled-components';
import { DashLine, Subtitle, Title } from '../../../../utils/styledItems';
import AppointmentForm from './AppointmentForm/AppointmentForm';

const Appointments = () => {
    return (
        <Container className='section-side-padding'>

            <Subtitle><DashLine />Appointment</Subtitle>
            <Title>Make an <br />appointment </Title>

            <FormWraper>
                <AppointmentForm />
            </FormWraper>

        </Container>
    );
};

export default Appointments;


const Container = styled.section`
padding-top: 6rem;
padding-bottom: 1rem;
`;
const FormWraper = styled.div`
padding: 2.5rem 0rem;
`;