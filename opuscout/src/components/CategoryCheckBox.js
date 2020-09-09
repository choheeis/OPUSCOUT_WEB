import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdDone } from 'react-icons/md';
import { useFilterDispatch, useFilterState } from '../contexts/FilterContext';

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
    ${props => props.check && css`
        background: #2B2CFF;
        color: white;
    `
    }
`;

function CategoryCheckBox({ id, check, text }) {
    const dispatch = useFilterDispatch();
    const onToggle = () => {
        dispatch({
            type: 'TOGGLE',
            id
        })
    }
    return(
        <CategoryCheckBoxStyle>
            <div className="category-name">{text}</div>
            <CheckBoxStyle onClick={onToggle} check={check}>
                {check && <MdDone />}
            </CheckBoxStyle>
        </CategoryCheckBoxStyle>
    )
}

export default React.memo(CategoryCheckBox);