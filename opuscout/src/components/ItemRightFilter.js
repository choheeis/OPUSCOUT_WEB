import React from 'react';
import styled from 'styled-components';
import MaxMinBox from './MaxMinBox';
import CommonButton from './CommonButton';

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

function ItemRightFilter() {
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
                <CommonButton name="설정 완료"/>
            </div>
        </ItemRightFilterStyle>
    )
}

export default ItemRightFilter;