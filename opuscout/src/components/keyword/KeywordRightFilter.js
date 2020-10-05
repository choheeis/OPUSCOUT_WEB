/* External Dependencies */
import React, { useState } from 'react';
import styled from 'styled-components';
import { CgBorderStyleSolid } from "react-icons/cg";
import InputRange from 'react-input-range';

/* Internal Dependencies */
import { useRightItemDispatch, useServerResponseDispatch } from '../../provider/MainProvider';
import { getKeywordList } from '../../api/api';
import { GetKeywordFilterData } from './GetKeywordFilterData';

function KeywordRightFilter() {
    // state, dispatch scope
    const rightItemDispatch = useRightItemDispatch();
    const responseDispatch = useServerResponseDispatch();
    const [opportunityState, setOpportunityState] = useState({
        value: {
            min: 2, 
            max: 8
        }
    });

    // get body to api
    const keywordBody = GetKeywordFilterData();

    const onComplete = () => {
        // api call
        getKeywordList(keywordBody, responseDispatch)
    }

    const onChange = (e) => {
        rightItemDispatch({
            type: 'KEYWORD_INPUT_CHANGE',
            id: e.target.id,
            value: e.target.value
        })
    }

    return(
        <KeywordRightFilterStyle>
            <div className="divide">
                <div className="max-min-name">월 판매량</div>
                <div className="box">
                    <InputBoxStyle onChange={onChange} id="1" placeholder="최소 판매량"></InputBoxStyle>
                    <div className="divide-center"><CgBorderStyleSolid /></div>
                    <InputBoxStyle onChange={onChange} id="2" placeholder="최대 판매량"></InputBoxStyle>    
                </div>

                <div className="max-min-name">월 수익량</div>
                <div className="box">
                    <InputBoxStyle onChange={onChange} id="3" placeholder="최소 수익량"></InputBoxStyle>
                    <div className="divide-center"><CgBorderStyleSolid /></div>
                    <InputBoxStyle onChange={onChange} id="4" placeholder="최대 수익량"></InputBoxStyle>    
                </div>

                <div className="max-min-name">아이템 가격</div>
                <div className="box">
                    <InputBoxStyle onChange={onChange} id="5" placeholder="최소 가격"></InputBoxStyle>
                    <div className="divide-center"><CgBorderStyleSolid /></div>
                    <InputBoxStyle onChange={onChange} id="6" placeholder="최대 가격"></InputBoxStyle>    
                </div>
            </div>
            <div className="divide">
                <div className="max-min-name">리뷰수</div>
                <div className="box">
                    <InputBoxStyle onChange={onChange} id="7" placeholder="최소 리뷰수"></InputBoxStyle>
                    <div className="divide-center"><CgBorderStyleSolid /></div>
                    <InputBoxStyle onChange={onChange} id="8" placeholder="최대 리뷰수"></InputBoxStyle>    
                </div>

                <div className="max-min-name">셀러수</div>
                <div className="box">
                    <InputBoxStyle onChange={onChange} id="9" placeholder="최소 셀러수"></InputBoxStyle>
                    <div className="divide-center"><CgBorderStyleSolid /></div>
                    <InputBoxStyle onChange={onChange} id="10" placeholder="최대 셀러수"></InputBoxStyle>    
                </div>

                <div className="max-min-name">경쟁강도</div>
                <div className="box">
                <InputRange 
                    minValue={0} 
                    maxValue={10} 
                    value={opportunityState.value} 
                    onChange={value => {
                        setOpportunityState({value})
                        rightItemDispatch({
                            type: 'KEYWORD_INPUT_CHANGE',
                            id: "11",
                            value: value
                        })
                    }}>
                </InputRange>
                </div>

                
            </div>
            <div className="divide">
                <div className="max-min-name">포함되어야 할 키워드</div>
                    <div className="box">
                        <InputBoxStyle onChange={onChange} id="13" placeholder="포함 키워드"></InputBoxStyle>
                    </div>
                <CompleteButtonStyle onClick={onComplete}>설정 완료</CompleteButtonStyle>    
            </div>
        </KeywordRightFilterStyle>
    )
}

export default KeywordRightFilter;

const KeywordRightFilterStyle = styled.div`
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
        width: 50px;
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