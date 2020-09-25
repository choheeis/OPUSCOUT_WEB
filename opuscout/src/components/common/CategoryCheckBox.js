/* External Dependencies */
import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone } from 'react-icons/md';

/* Internal Dependencies */
import { useCategoryDispatch, useMiddleCategoryDispatch } from '../../provider/MainProvider';

const CategoryCheckBoxStyle = styled.div`
    display: block;
    content: "";
    clear: both;
    padding: 5px 0px;

    .category-name {
        display: flex;
        color: #000000;
        font-weight: 500;
        font-size: 13px;
        float: left;
    }
`;

const CheckBoxStyle = styled.div`
    width: 16px;
    height: 16px;
    background: #ffffff;
    border: 0.5px solid #2B2CFF;
    float: right;
    cursor: pointer;
    margin-left: 30px;
    ${props => props.check && css`
        background: #2B2CFF;
        color: white;
    `
    }
`;

function CategoryCheckBox({ id, check, text, categorySize, largeCategory }) {
    const largeCategoryDispatch = useCategoryDispatch();
    const middleCategoryDispatch = useMiddleCategoryDispatch();
    const onToggle = () => {
        if(categorySize === 'large') {
            largeCategoryDispatch({
                type: 'TOGGLE',
                id
            })
        }else if(categorySize === 'middle') {
            middleCategoryDispatch({
                type: 'TOGGLE',
                id,
                largeCategory
            })
        }
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