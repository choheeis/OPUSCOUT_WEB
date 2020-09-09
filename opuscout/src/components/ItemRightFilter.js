import React from 'react';
import styled from 'styled-components';
import MaxMinBox from './MaxMinBox';
import { useFilterDispatch, useFilterState } from '../contexts/FilterContext';

const ItemRightFilterStyle = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
    padding-right: 3%;
    padding-top: 2%;
    padding-bottom: 2%;
    box-sizing: border-box;
    float: right;
    color: white;

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

function ItemRightFilter() {   
    const categoryState = useFilterState();
    const dispatch = useFilterDispatch();
    const onComplete = () => {
        //여기서 api 호출 함수 호출하면 됨
        console.log(categoryState[3]);
    }

    return(
        <ItemRightFilterStyle>
            <div className="divide-left">
                <MaxMinBox text="월 판매량" hideMin="최소 판매량" hideMax="최대 판매량"></MaxMinBox>
                <MaxMinBox text="월 수익량" hideMin="최소 수익량" hideMax="최대 수익량"></MaxMinBox>
                <MaxMinBox text="아이템 가격" hideMin="최소 가격" hideMax="최대 가격"></MaxMinBox>
            </div>
            <div className="divide-right">
                <MaxMinBox text="리뷰수" hideMin="최소 리뷰수" hideMax="최대 리뷰수"></MaxMinBox>
                <MaxMinBox text="초기 투자 비용" hideMin="최소 투자 비용" hideMax="최대 투자 비용"></MaxMinBox>
                <CompleteButtonStyle onClick={onComplete}>설정 완료</CompleteButtonStyle>
            </div>
        </ItemRightFilterStyle>
    )
}

export default React.memo(ItemRightFilter);