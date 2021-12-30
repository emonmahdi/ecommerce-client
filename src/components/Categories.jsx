import React from 'react';
import styled from 'styled-components';
import {categories} from '../data'
import { mobile } from '../responsive';
import CategotyItem from './CategotyItem';

const Container = styled.div` 
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({padding:'0px', flexDirection: 'column'})}
`

const Categories = () => {
    return (
        <Container>
            {categories.map(item => (
                <CategotyItem item={item} key={item.id} />
            ) )}
        </Container>
    );
};

export default Categories;