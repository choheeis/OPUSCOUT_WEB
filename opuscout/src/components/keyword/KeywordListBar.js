/* External Dependencies */
import React from 'react';
import styled from 'styled-components';

function KeywordListBar({ index, keyword, price, month_sales, review, revenue, seller, opportunity_score }) {
    return(
    <ListBarStyle>
        <Text>{index}</Text>
        <Text>{keyword}</Text>
        <Text>{price}</Text>
        <Text>{month_sales}</Text>
        <Text>{review}</Text>
        <Text>{revenue}</Text>
        <Text>{seller}</Text>
        <Text>{opportunity_score}</Text>
    </ListBarStyle>
    )
}

export default KeywordListBar;

const ListBarStyle = styled.div`
    display: flex;
    width: 100%;
    height: 110px;
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