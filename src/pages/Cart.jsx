import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Announcment from '../components/Announcment';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { mobile } from '../responsive';

const Container = styled.div``

const Wrapper = styled.div`
    padding:20px;
    ${mobile({padding:'10px' })}
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props)=> props.type === 'filled' && 'none'};
    background-color: ${(props)=> props.type === 'filled' ? 'black' : 'transparent'};
    color: ${(props)=> props.type === 'filled' && 'white'};
`
const TopTexts = styled.div`
    ${mobile({display:'none' })}
`
const TopText = styled.span`
    text-decoration: underline;
    cursor:pointer;
    margin: 0px 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content:space-between;
    ${mobile({flexDirection:'column' })}
`
const Info = styled.div`
    flex:3;
`
const Product = styled.div`
    display: flex; 
    justify-content: space-between;
    ${mobile({flexDirection:'column' })}
`
const ProductDetail = styled.div`
    flex:2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
    padding: 20px; 
    display: flex;
    flex-direction: column;
    justify-content: space-around; 
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color}
`
const ProductSize = styled.span``

const Hr = styled.hr`
    border: none;
    background: #eee;
    height: 2px;
`

const PriceDetail = styled.div`
    flex:2;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-between;
    padding: 10px;
`
const ProductAmountContainer = styled.div`
    display:flex;
    align-items:center;
    margin-bottom: 20px;
`
const ProductAmount  = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({margin:'5px 15px' })}
`
const ProductPrice  = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({marginBottom:'20px' })}
`

const Summary = styled.div`
    flex:1; 
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`
const SummaryTitle = styled.h1`
    font-weight: 300;
`
const SummaryItem = styled.div`
    margin: 30px 0;
    display:flex; 
    justify-content: space-between;
    font-weight: ${props=> props.type === 'total' && '500'};
    font-size: ${props=> props.type === 'total' && '24px'}
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
    width: 100%;
    background-color: #000;
    color: #fff;
    font-weight: 600;
    padding: 10px;
    border: none;
    cursor: pointer;
`

const Cart = () => {
    return (
        <Container>
            <Navbar></Navbar>
            <Announcment></Announcment>
             <Wrapper>
                 <Title>YOUR BAG</Title>
                 <Top>
                     <TopButton>CONTINUE SHOPPING</TopButton>
                     <TopTexts>
                         <TopText>Shopping Bag (2)</TopText>
                         <TopText>Your Wishlist (0)</TopText>
                     </TopTexts>
                     <TopButton type='filled'>CHECKOUT NOW</TopButton>
                 </Top>
                 <Bottom>
                     <Info>
                        <Product>
                            <ProductDetail>
                                <Image src='https://i.pinimg.com/originals/52/77/3f/52773f9b9970d70bc1a7732d31b9dfd1.jpg'/>
                                <Details>
                                    <ProductName><b>Product: </b> Jessie Thunder Shoes</ProductName>
                                    <ProductId><b>ID: </b> 2354364356</ProductId>
                                    <ProductColor color='black' />
                                    <ProductSize><b>Size: </b> 37.5</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                               <ProductAmountContainer>
                                   <Add />
                                   <ProductAmount>2</ProductAmount>
                                   <Remove />
                               </ProductAmountContainer>
                               <ProductPrice>$ 30 </ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetail>
                                <Image src='https://rendering.documents.cimpress.io/v1/vp/preview?width=690&height=690&quality=80&scene=https://scene.products.cimpress.io/v1/scenes/39fff789-7ad5-4b08-8faf-753d0c960f48'/>
                                <Details>
                                    <ProductName><b>Product: </b> Summar T-Shirt</ProductName>
                                    <ProductId><b>ID: </b> 2354364323</ProductId>
                                    <ProductColor color='gray' />
                                    <ProductSize><b>Size: </b> M</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                               <ProductAmountContainer>
                                   <Add />
                                   <ProductAmount>1</ProductAmount>
                                   <Remove />
                               </ProductAmountContainer>
                               <ProductPrice>$ 30 </ProductPrice>
                            </PriceDetail>
                        </Product>

                     </Info>
                     <Summary>
                         <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                         <SummaryItem>
                             <SummaryItemText>SubTotal</SummaryItemText>
                             <SummaryItemPrice>$ 80</SummaryItemPrice>
                         </SummaryItem>
                         <SummaryItem>
                             <SummaryItemText>Estimated Shipping </SummaryItemText>
                             <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                         </SummaryItem>
                         <SummaryItem>
                             <SummaryItemText>Shipping Discount </SummaryItemText>
                             <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                         </SummaryItem>
                         <SummaryItem type='total'>
                             <SummaryItemText>Total</SummaryItemText>
                             <SummaryItemPrice>$ 80</SummaryItemPrice>
                         </SummaryItem>
                         <Button>CHECKOUT NOW</Button>
                     </Summary>
                 </Bottom>
             </Wrapper>
            <Footer></Footer>
        </Container>
    );
};

export default Cart;