import React from 'react';
import styled from 'styled-components';

const ListBarStyle = styled.div`
    display: flex;
    width: 100%;
    height: 110px;
    background: pink;
    border: 0.5px solid #2B2CFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`;

const Text = styled.div`
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
    font-size: 20px;
`;

function ListBar({ index, name, brand, price, ranking, month_sales, day_sales, revenue, review, star, seller, opportunity }) {
    return(
    <ListBarStyle>
        <Text>{index}</Text>
        <Text>{name}</Text>
        <Text>{brand}</Text>
        <Text>{price}</Text>
        <Text>{ranking}</Text>
        <Text>{month_sales}</Text>
        <Text>{day_sales}</Text>
        <Text>{revenue}</Text>
        <Text>{review}</Text>
        <Text>{star}</Text>
        <Text>{seller}</Text>
        <Text>{opportunity}</Text>
    </ListBarStyle>
    )
}

export default ListBar;