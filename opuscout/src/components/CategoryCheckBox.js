import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone } from 'react-icons/md';

const CategoryCheckBoxStyle = styled.div`
    display: block;
    content: "";
    clear: both;
    padding: 12px 0px;

    .category-name {
        display: flex;
        color: #000000;
        font-weight: 500;
        font-size: 15px;
        float: left;
    }
`;

const CheckBoxStyle = styled.div`
    width: 18px;
    height: 18px;
    background: #ffffff;
    border: 0.5px solid #2B2CFF;
    float: right;
    cursor: pointer;
    ${props => props.done && css`
        background: #2B2CFF;
        color: white;
    `
    }
`;

function CategoryCheckBox({ id, done, text }) {
    return(
        <CategoryCheckBoxStyle>
            <div className="category-name">{text}</div>
            <CheckBoxStyle done={done}>{done && <MdDone />}</CheckBoxStyle>
        </CategoryCheckBoxStyle>
    )
}

export default CategoryCheckBox;