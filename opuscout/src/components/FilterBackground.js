import React from 'react';
import styled from 'styled-components';

const FilterTitle = styled.div`
    .page-title {
        color: #000000;
        background: #ffffff;
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 20px;
        font-weight: bold;
    }
    .filter-background {
        height: 500px;
        border: 0.5px solid #2B2CFF;
        background: #ffffff;
        color: black;
        box-sizing: border-box;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    }
`;

function FilterBackground({children}) {
    return(
        <FilterTitle>
            <div className="page-title">
                {children}
            </div>
            <div className="filter-background">필터배경</div>
        </FilterTitle>
    )
}

export default FilterBackground;