import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Info = styled.div`
    opacity:0;   
    height: 100%;
    width: 100%;  
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.2);
    z-index:3;
    transition:all 0.5s ease;
    cursor: pointer;
`


const Container = styled.div`
    flex: 1;
    margin:5px;
    min-width: 280px;
    height:350px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    // background-color: #f5fbfd;

   &:hover ${Info}{
        opacity:1;
   } 
`
const Circle = styled.div`
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;

`
const Image = styled.img`
    height:75%;
    z-index:2;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius:50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:#fff;
    margin:10px;
    transition:all 0.5s ease;

  &:hover{
      backgorund-color:#e9f5f5;
      transform: scale(1.1);
  } ; 

`

const Product = ({item}) => {
    return (
        <Container>
            <Circle />
            <Image src={item.img}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <SearchOutlined />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    );
};

export default Product;