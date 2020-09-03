import React from 'react';
import styled from 'styled-components';
import { CgBorderStyleSolid } from "react-icons/cg";

const MaxMinBoxStyle = styled.div`
    color: #2B2CFF;
    margin-bottom: 20px;

    .box {
        display: flex;
        margin-top: 14px;
    }

    .divide-center {
        flex: 1 1 auto;
        color: #808080;
        text-align: center;
        box-sizing: border-box;
    }
`;

const InputBoxStyle = styled.input`
    flex: 1 1 auto;
    width: 100px;
    box-sizing: border-box;
    border: 0.5px solid #2B2CFF;
    padding: 2px 5px;
    font-size: 16px;
    color: #000000;
    text-align: center;
    &:focus: {
        outline: none;
        
    }
    &:focus::placeholder {
        
    }
`;


function MaxMinBox({id, text, hideMin, hideMax, min, max}) {
    return (
        <MaxMinBoxStyle>
            <div className="max-min-name">{text}</div>
            <div className="box">
                <InputBoxStyle placeholder={hideMin} autoFocus></InputBoxStyle>
                <div className="divide-center"><CgBorderStyleSolid /></div>
                <InputBoxStyle placeholder={hideMax}></InputBoxStyle>    
            </div>
        </MaxMinBoxStyle>
    )
}

export default MaxMinBox;