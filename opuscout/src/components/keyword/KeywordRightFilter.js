/* External Dependencies */
import React from 'react';
import styled from 'styled-components';
import { CgBorderStyleSolid } from "react-icons/cg";

/* Internal Dependencies */
import { useRightItemDispatch, useCategoryState, useRightItemState } from '../../provider/MainProvider';

const KeywordRightFilterStyle = styled.div`
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
    const categoryState = useCategoryState();
    const rightItemState = useRightItemState();
    const onComplete = () => {
        const checkedCategoies = [];
        categoryState.map( section => 
            section.map( category =>{
                if(category.check === true) {
                    checkedCategoies.push(category.en_name);
                }
            })
        );
        alert("선택된 카테고리 이름 : " + checkedCategoies);
        console.log(rightItemState.keyword);
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
            <div className="divide-left">
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
            <div className="divide-right">
                <div className="max-min-name">리뷰수</div>
                <div className="box">
                    <InputBoxStyle onChange={onChange} id="7" placeholder="최소 리뷰수"></InputBoxStyle>
                    <div className="divide-center"><CgBorderStyleSolid /></div>
                    <InputBoxStyle onChange={onChange} id="8" placeholder="최대 리뷰수"></InputBoxStyle>    
                </div>

                <div className="max-min-name">포함되어야 할 키워드</div>
                <div className="box">
                    <InputBoxStyle onChange={onChange} id="9" placeholder="포함 키워드"></InputBoxStyle>
                </div>
                <CompleteButtonStyle onClick={onComplete}>설정 완료</CompleteButtonStyle>
            </div>
        </KeywordRightFilterStyle>
    )
}

export default KeywordRightFilter;