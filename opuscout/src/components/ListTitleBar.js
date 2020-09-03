import React from 'react';
import styled from 'styled-components';
import { CgChevronDown } from "react-icons/cg";

const ListTitleBarStyle = styled.div`
    display: flex;
    width: 100%;
    height: 58px;
    margin: 30px auto;
    border: 0.5px solid #2B2CFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    background: #ffffff;
`;

const Title = styled.div`
    display: flex;
    flex: 1 1 auto;
    height: 100%;
    align-items: center;
    font-size: 20px;
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
            <Title>판매 가격<CgChevronDown className="down-button"/></Title>
            <Title>랭킹<CgChevronDown className="down-button"/></Title>
            <Title>월 판매량<CgChevronDown className="down-button"/></Title>
            <Title>일 판매량</Title>
            <Title>수익<CgChevronDown className="down-button"/></Title>
            <Title>리뷰수<CgChevronDown className="down-button"/></Title>
            <Title>별점<CgChevronDown className="down-button"/></Title>
            <Title>셀러수<CgChevronDown className="down-button"/></Title>
            <Title>경쟁강도<CgChevronDown className="down-button"/></Title>
        </ListTitleBarStyle>
    )
}

export default ListTitleBar;