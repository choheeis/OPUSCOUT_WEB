import React from 'react';
import styled from 'styled-components';

const LeftFilterStyle = styled.div`
    .filter-left-container {
        width: 48%;
        height: 100%;
        color: white;
        background: greenyellow;
        box-sizing: border-box;
        float: left;
    }
    .title {
        font-size: 50px;
        color: black;
    }
    .test {
        background: blue;
    }
`;

function LeftFilter() {
    return(
        <LeftFilterStyle>
            <div className="filter-left-container">
                <div className="title">카테고리</div>
                <div className="test">dafadsfjl</div>
            </div>
        </LeftFilterStyle>
    )
}

export default LeftFilter;