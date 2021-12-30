import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Announcment from '../components/Announcment';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { mobile } from '../responsive';

const Container = styled.div``
const Wrapper = styled.div`
    padding: 50px;
    display:flex;
    ${mobile({padding:'10px', flexDirection: 'column' })}
`
const ImageContainer = styled.div`
    flex:1;
    
`

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({height:'40vh' })}

`

const InfoContainer = styled.div`
    flex:1;
    padding: 0 50px;
    ${mobile({padding:'10px' })}
`

const Title = styled.h1`
    font-weight: 200;
`

const Desc = styled.p`  
    margin: 20px 0;
`

const Price = styled.span`
    font-size: 40px;
    font-weight: 100;
`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0;
    display:flex;
    justify-content: space-between;
    ${mobile({width: '100%'})}
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: ${props => props.color} ;
    margin: 0px 5px;
    cursor: pointer;

`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    width: 50%; 
    display: flex;
    align-items: center;
    justify-content: space-between; 
    ${mobile({width: '100%'})}
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weigth: 700;
`

const Amount  = styled.span`
    height: 30px;
    width: 30px;  
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
    font-weigth: 800;
`

const Button  = styled.button`
    padding:15px;
    border: 2px solid teal;
    background-color: #fff;
    cursor:pointer;
    font-weight:500;

  &:hover{
      background-color:#f8f4f4;
  }  

`

const Product = () => {
    return (
        <Container>
            <Navbar></Navbar>
            <Announcment></Announcment>
            <Wrapper>
                <ImageContainer>
                    <Image src='https://i.ibb.co/xj65rNg/s2.jpg' />
                </ImageContainer>
                <InfoContainer>
                    <Title>Smart shart</Title>
                    <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, libero officia recusandae soluta sequi fuga dolorem modi nisi assumenda molestias ducimus unde odit dignissimos, debitis pariatur autem natus eaque veniam!</Desc>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color='black'/> 
                            <FilterColor color='darkblue'/> 
                            <FilterColor color='gray'/>   
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>Add To Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </Container>
    );
};

export default Product;