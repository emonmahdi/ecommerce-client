import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url('https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80') center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items:center;
    justify-content:center;
`

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: #fff;
    ${mobile({width:'75%' })}
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    flex-direction:column;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin:10px 0px ;
    padding: 10px;
`
 

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: #fff;
    cursor:pointer;
    margin-bottom: 10px;
`
const Link = styled.a`
    font-size: 12px;
    text-decoration: underline;
    margin: 10px 0;
    cursor: pointer;
`

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder='username' />
                    <Input placeholder='password' /> 
                    <Button>Log In</Button> 
                </Form>
                <Link>DO NOT YOU REMEMBER THE PASSWORD!</Link><br />
                <Link>CREATE A NEW ACCOUNT</Link>
            </Wrapper>
        </Container>
    );
};

export default Login;