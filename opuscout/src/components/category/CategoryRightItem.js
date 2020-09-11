/* External Dependencies */
import React, { useState } from 'react';
import styled from 'styled-components';
import { CgBorderStyleSolid } from "react-icons/cg";
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { useCategoryState, useRightItemDispatch } from '../../provider/MainProvider';

const CategoryRightFilterStyle = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
    padding-right: 3%;
    padding-top: 2%;
    padding-bottom: 2%;
    box-sizing: border-box;
    float: right;

    .divide-left {
        width: 50%;
        height: 100%;
        flex: 1 1 auto;
        box-sizing: border-box;
    }

    .divide-right {
        width: 50%;
        height: 100%;
        flex: 1 1 auto;
        margin-left: 20px;
        box-sizing: border-box;
    }

    .max-min-name {
        color: #2B2CFF;  
        margin-bottom: 14px;  
    }

    .box {
        display: flex;
        margin-bottom: 20px;
    }

    .divide-center {
        flex: 1 1 auto;
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
function CategoryRightItem() {
    const categoryState = useCategoryState();
    const [opportunityState, setOpportunityState] = useState({
        value: {
            min: 2, 
            max: 8
        }
    });

    const onComplete = () => {
        const checkedIndex = [];
        categoryState.map( section => 
            section.map( category =>{
                if(category.check === true) {
                    checkedIndex.push(category.id);
                }
            })
        );
        console.log(checkedIndex);
        // 경쟁강도는 여기서 바로 opportunityState.value.min 이런식으로 사용하면 됨
        alert("선택된 키워드에서 카테고리 id 번호 : " + checkedIndex);
        alert("선택된 경쟁 강도 : " + opportunityState.value.min);
    }

    const rightItemDispatch = useRightItemDispatch();
    const onChange = (e) => {
        rightItemDispatch({
            type: 'CATEGORY_INPUT_CHANGE',
            id: e.target.id,
            value: e.target.value
        })
    }

    return (
        <CategoryRightFilterStyle>
            <div className="divide-left">
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
            <div className="divide-right">
                <div className="max-min-name">경쟁 강도</div>
                <div className="box">
                    <InputRange minValue={0} maxValue={10} value={opportunityState.value} onChange={value => setOpportunityState({value})}></InputRange>
                </div>
                <CompleteButtonStyle onClick={onComplete}>설정 완료</CompleteButtonStyle>
            </div>
        </CategoryRightFilterStyle>
    )
}

export default CategoryRightItem;