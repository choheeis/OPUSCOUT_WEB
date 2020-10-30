/* External Dependencies */
import React from 'react';
import styled from 'styled-components';

/* Internal Dependencies */
import SortDropDown from '../common/SortDropDown';

function CategoryTitleBar() {
    return(
        <ListTitleBarStyle>
            <Title>순번</Title>
            <Title>카테고리명</Title>
            <SortDropDown page_name="category" en_name="price" kr_name='평균가격' ascName='낮은 순' descName='높은 순'></SortDropDown>
            <SortDropDown page_name="category" en_name="month_sales" kr_name='평균 월판매량' ascName='낮은 순' descName='높은 순'></SortDropDown>
            <SortDropDown page_name="category" en_name="revenue" kr_name='평균수익' ascName='낮은 순' descName='높은 순'></SortDropDown>
            <SortDropDown page_name="category" en_name="review" kr_name='평균리뷰수' ascName='낮은 순' descName='높은 순'></SortDropDown>
            <SortDropDown page_name="category" en_name="seller" kr_name='평균셀러수' ascName='적은 순' descName='많은 순'></SortDropDown>
            <SortDropDown page_name="category" en_name="opportunity_score" kr_name='경쟁강도' ascName='낮은 순' descName='높은 순'></SortDropDown>
        </ListTitleBarStyle>
    )
}

export default CategoryTitleBar;

const ListTitleBarStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 58px;
    margin: 10px auto;
    border: 0.5px solid #2B2CFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    background: #ffffff;
`;

const Title = styled.div`
    display: flex;
    flex: 1 1 auto;
    height: 100%;
    align-items: center;
    font-size: 18px;
    justify-content: center;
    background; pink;
    .down-button {
        width: 30px;
        height: 30px;
        cursor: pointer;
    }
`;