/* External Dependencies */
import React from 'react';
import styled from 'styled-components';

/* Internal Dependencies */
import CategoryLargeFilter from '../common/CategoryLargeFilter';
import ItemRightFilter from './ItemRightFilter';

function ItemFilter({ children }) {
    return(
        <FilterBaseLayoutStyle>
            <div className="page-title">{children}</div>
            <div className="container-box">
                <CategoryLargeFilter></CategoryLargeFilter>
                <ItemRightFilter></ItemRightFilter>
            </div>
        </FilterBaseLayoutStyle>
    )
}

export default ItemFilter;

const FilterBaseLayoutStyle = styled.div`
    .page-title {
        width: 90%;
        margin: 0px auto;
        color: #000000;
        margin-bottom: 20px;
        font-size: 24px;
        font-weight: bold;
    }

    .container-box {
        display: block;
        content: "";
        clear: both;
        width: 90%;
        height: 326px;
        margin: 30px auto;
        border: 0.5px solid #2B2CFF;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        background: #ffffff;
    }
`;
