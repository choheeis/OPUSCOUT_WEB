/* External Dependencies */
import React, { useState } from 'react';
import styled from 'styled-components';
import { CgBorderStyleSolid } from "react-icons/cg";
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { useRightItemDispatch, useRightItemState, useServerResponseDispatch } from '../../provider/MainProvider';
import { getCategoryItem } from '../../api/api';
import { GetCategoryFilterData } from './GetCategoryFilterData';

const CategoryRightFilterStyle = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 4%;
    box-sizing: border-box;
    font-weight: bold;

    .divide {
        height: 100%;
        flex: 1 1 auto;
        box-sizing: border-box;
    }

    .max-min-name {
        color: #2B2CFF;  
        margin-bottom: 14px;  
    }

    .box {
        display: flex;
        margin-bottom: 20px;
        padding-right: 20%;
        box-sizing: border-box;
    }

    .divide-center {
        width: 100px;
        color: #808080;
        text-align: center;
        box-sizing: border-box;
    }
`;

const CompleteButtonStyle = styled.button`
    width: 100px;
    height: 35px;
    background: #2B2CFF;
    border-radius: 4px;
    color: #ffffff;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    float: right;
    border: none;
    outline: none;
    margin-top: 30px;
    
    &:hover {
        // 커서 호버시 연한 파란색
        background: #2353FF;
    }
    &:active {
        // 클릭시 어두운 파란색
        background: #001aec;
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

// input range : https://www.npmjs.com/package/react-input-range
function CategoryRightFilter() {
    const rightItemDispatch = useRightItemDispatch();
    const serverResponseDispatch = useServerResponseDispatch();
    const categoryBody = GetCategoryFilterData()
    const [opportunityState, setOpportunityState] = useState({
        value: {
            min: 2, 
            max: 8
        }
    });

    const onComplete = () => {
        // api call
        getCategoryItem(categoryBody, serverResponseDispatch)
    }
    
    const onChange = (e) => {
        rightItemDispatch({
            type: 'CATEGORY_INPUT_CHANGE',
            id: e.target.id,
            value: e.target.value
        })
    }

    return (
        <CategoryRightFilterStyle>
            <div className="divide">
                <div className="max-min-name">월 판매량</div>
                <div className="box">
                    <InputBoxStyle id="1" onChange={onChange} placeholder="최소 판매량"></InputBoxStyle>
                    <div className="divide-center"><CgBorderStyleSolid /></div>
                    <InputBoxStyle id="2" onChange={onChange} placeholder="최대 판매량"></InputBoxStyle>    
                </div>

                <div className="max-min-name">월 수익량</div>
                <div className="box">
                    <InputBoxStyle id="3" onChange={onChange} placeholder="최소 수익량"></InputBoxStyle>
                    <div className="divide-center"><CgBorderStyleSolid /></div>
                    <InputBoxStyle id="4" onChange={onChange} placeholder="최대 수익량"></InputBoxStyle>    
                </div>

                <div className="max-min-name">아이템 가격</div>
                <div className="box">
                    <InputBoxStyle id="5" onChange={onChange} placeholder="최소 가격"></InputBoxStyle>
                    <div className="divide-center"><CgBorderStyleSolid /></div>
                    <InputBoxStyle id="6" onChange={onChange} placeholder="최대 가격"></InputBoxStyle>    
                </div>
            </div>
            <div className="divide">
            <div className="max-min-name">셀러수</div>
                <div className="box">
                    <InputBoxStyle id="7" onChange={onChange} placeholder="최소 셀러수"></InputBoxStyle>
                    <div className="divide-center"><CgBorderStyleSolid /></div>
                    <InputBoxStyle id="8" onChange={onChange} placeholder="최대 셀러수"></InputBoxStyle>    
                </div>

                <div className="max-min-name">경쟁 강도</div>
                <div className="box">
                    <InputRange 
                        minValue={0} 
                        maxValue={10} 
                        value={opportunityState.value} 
                        onChange={value => {
                            setOpportunityState({value})
                            rightItemDispatch({
                                type: 'CATEGORY_INPUT_CHANGE',
                                id: "9",
                                value: value
                            })
                        }}
                    ></InputRange>
                </div>
                <CompleteButtonStyle onClick={onComplete}>설정 완료</CompleteButtonStyle>
            </div>
        </CategoryRightFilterStyle>
    )
}

export default CategoryRightFilter;