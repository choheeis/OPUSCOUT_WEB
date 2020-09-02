import React from 'react';
import styled from 'styled-components';

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

    .check-box {
        float: right;
    }
`;

function CategoryCheckBox({ children }) {
    return(
        <CategoryCheckBoxStyle>
            <div className="category-name">{children}</div>
            <div className="check-box">쳌</div>
        </CategoryCheckBoxStyle>
    )
}

export default CategoryCheckBox;