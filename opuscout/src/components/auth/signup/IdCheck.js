import React from 'react';
import styled from 'styled-components';
import { MdDone } from 'react-icons/md';

const IdCheckStyle = styled.div`
    display: flex;
    color: #F34D4D;
    cursor: pointer;
`;

const CheckBox = styled.div`
    width: 18px;
    height: 18px;
    background: #F34D4D;
    color: #ffffff;
`;

function IdCheck({ text, check }) {
    return(
        <IdCheckStyle>
            <div className="text">{text}</div>
            <CheckBox check={check}>
                {check && <MdDone />}
            </CheckBox>
        </IdCheckStyle>
    )
}

export default IdCheck;