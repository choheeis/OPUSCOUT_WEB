import React from 'react';
import styled from 'styled-components';
import { CgBorderStyleSolid } from "react-icons/cg";
import { useRightItemDispatch } from '../provider/MainProvider';
// 이 파일 필요 없음 

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
        color: transparent;
    }
`;


function MaxMinBox({ id, text, hideMin, hideMax }) {
    // TODO: onChange는 내용이 변경될 때마다 발생하는 것임
    // 최대, 최소 박스에서 onChange 걸고 onChange발생하면 호출되는 함수에는
    // 상태값 변경해주면 됨 즉 일단 setValue로 변경될 때마다 값 저장해주고 
    // 그걸 나중에 dispatch 로 진짜 state에 업데이트 해주면 될 듯
    // 근데 dispatch 해주는 순간이 언젤까
    const rightItemDispatch = useRightItemDispatch();
    const onChange = (e) => {
        // 어떤 인풋인지도 같이 보내야하나?
        if (text === '월 판매량') {
            rightItemDispatch({
                type: 'MONTH_SALES',
                hideMin,
                hideMax,
                value: e.target.value
            })
        }
    }

    return (
        <MaxMinBoxStyle>
            <div className="max-min-name">{text}</div>
            <div className="box">
                <InputBoxStyle onChange={onChange} placeholder={hideMin} ></InputBoxStyle>
                <div className="divide-center"><CgBorderStyleSolid /></div>
                <InputBoxStyle onChange={onChange} placeholder={hideMax} ></InputBoxStyle>    
            </div>
        </MaxMinBoxStyle>
    )
}

export default MaxMinBox;