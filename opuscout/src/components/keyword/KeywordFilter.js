import React from 'react';
import styled from 'styled-components';
import CategoryFilter from '../common/CategoryFilter';
import CategoryMiddleFilter from '../common/CategoryMiddleFilter';
import KeywordRightFilter from './KeywordRightFilter';

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
        margin: 30px auto;
        border: 0.5px solid #2B2CFF;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        background: #ffffff;
    }
`;


function KeywordFilter({ children }) {
    return(
            <FilterBaseLayoutStyle>
                <div className="page-title">{children}</div>
                <div className="container-box">
                    <CategoryMiddleFilter></CategoryMiddleFilter>
                    {/* <KeywordRightFilter></KeywordRightFilter> */}
                </div>
            </FilterBaseLayoutStyle>
    )
}

export default KeywordFilter;