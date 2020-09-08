import React from 'react';
import styled from 'styled-components';

const CompleteButtonStyle = styled.button`
    width: 100px;
    height: 35px;
    background: #2B2CFF;
    border-radius: 4px;
    color: #ffffff;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    float: right;
    border: none;
    &:hover {
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    }
`;

function CompleteButton({ name }) {
    return(
    <CompleteButtonStyle>{name}</CompleteButtonStyle>
    )
}

export default CompleteButton;