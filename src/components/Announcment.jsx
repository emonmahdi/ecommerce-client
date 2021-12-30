import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: #fff;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
    font-weight: bold;

`


const Announcment = () => {
    return (
        <Container>
            <p>Welcome to my Eccomerse Shop center</p>
        </Container>
    );
};

export default Announcment;