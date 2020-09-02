import React from 'react';
import styled from 'styled-components';
import LeftFilter from './LeftFilter';

const TitleAndBox = styled.div`
    .page-title {
        color: #000000;
        background: #ffffff;
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 20px;
        font-weight: bold;
        background: pink;
    }
    .filter-background {
        display: block;
        content: "";
        clear: both;
        height: 500px;
        border: 0.5px solid #2B2CFF;
        background: yellow;
        box-sizing: border-box;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    }
`;

function ItemFilter({children}) {
    return(
        <TitleAndBox>
            <div className="page-title">
                {children}
            </div>
            <div className="filter-background">
                <LeftFilter>
                    
                </LeftFilter>
            </div>
        </TitleAndBox>
    )
}

export default ItemFilter;