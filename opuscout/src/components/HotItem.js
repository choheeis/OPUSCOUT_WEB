import React from 'react';
import styled from 'styled-components';

const HotItemStyle = styled.div`
    display: block;
`;

const TitleStyle = styled.div`
    display: block;
    item-align: center;
    font-size: 20px;
    font-weight: bold;
    background: #ffffff;
    color: #000000;
    text-align: center;
`;

const ItemListBoxStyle = styled.div`
    width: 250px;
    margin: 30px;
    padding-top: 50px;
    padding-bottom: 50px;
    border: 0.5px solid #2B2CFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;

    .hot-item-title {
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 50px;
    }
`;

const ItemStyle = styled.div`
    display: flex;
    margin-top: 30px;

    .index {
        width: 40%;
        color: blue;
        font-size: 20px;
        text-align: center;
    }

    .item-name{
        width: 60%;
        color: black;
        font-size: 20px;
    }
`;

function HotItem({ week_title }) {
    return(
        <HotItemStyle>
            <TitleStyle>{week_title}</TitleStyle>
            <ItemListBoxStyle>
                <div className="hot-item-title">HOT 아이템</div>
                <ItemStyle>
                    <div className="index">1</div>
                    <div className="item-name">원피스</div>
                </ItemStyle>
                <ItemStyle>
                    <div className="index">2</div>
                    <div className="item-name">바지</div>
                </ItemStyle>
                <ItemStyle>
                    <div className="index">3</div>
                    <div className="item-name">화사 게임기</div>
                </ItemStyle>
                <ItemStyle>
                    <div className="index">4</div>
                    <div className="item-name">오퍼스카웃 짱</div>
                </ItemStyle>
            </ItemListBoxStyle>
        </HotItemStyle>
    )
}

export default HotItem;