/* External Dependencies */
import React, { useState } from 'react';
import styled from 'styled-components';
import { CgBorderStyleSolid } from "react-icons/cg";

/* Internal Dependencies */
import { useRightItemDispatch, useCategoryState, useRightItemState, useMiddleCategoryState, useServerResponseDispatch } from '../../provider/MainProvider';
import InputRange from 'react-input-range';
import { getKeywordList } from '../../api/api';

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

function KeywordRightFilter() {
    const middleCategoryState = useMiddleCategoryState();
    const rightItemState = useRightItemState();
    const responseDispatch = useServerResponseDispatch();
    const [opportunityState, setOpportunityState] = useState({
        value: {
            min: 2, 
            max: 8
        }
    });

    const onComplete = () => {
        const checkedCategoies = [];
        
        Object.keys(middleCategoryState).map(largeCategory => {
            middleCategoryState[largeCategory].map(middleCategory => {
                if(middleCategory.check === true) {
                    checkedCategoies.push(middleCategory.id);
                }
            })
        });
        const keywords = [];
        keywords.push(rightItemState.keyword.mustKeword)

        const requestBody = {
            category : checkedCategoies,
            keyword : keywords,
            sales : {
                min : rightItemState.keyword.minSales,
                max : rightItemState.keyword.maxSales
            },
            revenue : {
                min : rightItemState.keyword.minRevenue,
                max : rightItemState.keyword.maxRevenue
            },
            price : {
                min : rightItemState.keyword.minPrice,
                max : rightItemState.keyword.maxPrice
            },
            seller : {
                min : rightItemState.keyword.minSeller,
                max : rightItemState.keyword.maxSeller
            },
            opportunity_count : {
                min : opportunityState.value.min,
                max : opportunityState.value.max
            },
            review : {
                min : rightItemState.keyword.minReview,
                max : rightItemState.keyword.maxReview
            }
        }

        const testBody = {
            "category" : ["shoes", "nail"],
            "keyword" : ["lion", "mask"],
            "sales" : {
                "min" : 10,
                "max" : 10000
            },
             "revenue" : {
                "min" : 100,
                "max" : 100000
            },
            "price" : {
                "min" : 1000,
                "max" : 1000000
            },
            "seller" : {
                "min" : 10,
                "max" : 1000
            },
            "opportunity_score" : {
                "min" : 1,
                "max" : 100
            },
            "review" : {
                "min" : 1,
                "max" : 10000
            }
        }
        
        // api call --> 여기 이제 testBody 부분을 requestBody 로 바꿔야함
        getKeywordList(testBody, responseDispatch)
    }

    const rightItemDispatch = useRightItemDispatch();
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
                <InputRange minValue={0} maxValue={10} value={opportunityState.value} onChange={value => setOpportunityState({value})}></InputRange>
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