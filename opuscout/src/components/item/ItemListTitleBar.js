import React from 'react';
import styled from 'styled-components';
import { CgChevronDown } from "react-icons/cg";
import SortDropDown from '../common/SortDropDown';



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

function ListTitleBar() {
    return(
        <ListTitleBarStyle>
            <Title>순번</Title>
            <Title>아이템명</Title>
            <Title>브랜드명</Title>
            <SortDropDown className='test' name='판매가격' ascName='높은 순' descName='낮은 순'></SortDropDown>
            <SortDropDown name='랭킹' ascName='높은 순' descName='낮은 순'></SortDropDown>
            <SortDropDown name='월 판매량' ascName='높은 순' descName='낮은 순'></SortDropDown>
            <Title>일 판매량</Title>
            <SortDropDown name='수익' ascName='높은 순' descName='낮은 순'></SortDropDown>
            <SortDropDown name='리뷰수' ascName='높은 순' descName='낮은 순'></SortDropDown>
            <SortDropDown name='별점' ascName='높은 순' descName='낮은 순'></SortDropDown>
            <SortDropDown name='셀러수' ascName='많은 순' descName='적은 순'></SortDropDown>
            <SortDropDown name='경쟁강도' ascName='높은 순' descName='낮은 순'></SortDropDown>
            <SortDropDown name='판매량' ascName='많은 순' descName='적은 순'></SortDropDown>
        </ListTitleBarStyle>
    )
}

export default ListTitleBar;