import { Facebook, Instagram, LinkedIn, MailOutline, Phone, Room, Twitter } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection:'column' })}

`
const Left = styled.div`
    flex: 1;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1``
const Desc = styled.p`
    margin:20px 0px;
`
const SocialContainer = styled.div`
    display:flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    background-color #${props=> props.color};
    border-radius: 50%;
    color:#fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`


const Center = styled.div`
    flex: 1;
    padding:20px;
    ${mobile({display:'none' })}
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding:0;
    list-style:none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div`
    flex: 1;
    padding:20px;
    ${mobile({backgroundColor:'#fff8f8' })}
`
 
const ContactItem = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items:center;
`
const Payment = styled.img`
    width: 50%;
`


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Eccomerce</Logo>
                <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis molestiae dicta optio, aliquam nisi ad sit facilis ex neque minima iusto fugiat! Commodi nobis velit blanditiis facere consequuntur. Fuga, incidunt?</Desc>
                <SocialContainer>
                    <SocialIcon color='3B5999'>
                        <Facebook></Facebook>
                    </SocialIcon>
                    <SocialIcon color='55ACEE'>
                        <Twitter></Twitter>
                    </SocialIcon>
                    <SocialIcon color='E4405F'>
                        <LinkedIn></LinkedIn>
                    </SocialIcon>
                    <SocialIcon color='E60023'>
                        <Instagram></Instagram>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Usefull Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart </ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Whish List </ListItem>
                    <ListItem>Terms </ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact Here</Title>
                <ContactItem><Room style={{marginRight:'10px'}} />  Barisal sadar, Barishal</ContactItem>
                <ContactItem> <Phone style={{marginRight:'10px'}} /> 88+01908131513</ContactItem>
                <ContactItem><MailOutline style={{marginRight:'10px'}} /> emonhowlader1997@gmail.com</ContactItem>
                <Payment src='https://i.ibb.co/fQNCfsL/payment.png' />
            </Right>
        </Container>
    );
};

export default Footer;