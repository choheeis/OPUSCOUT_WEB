import React from 'react';
import styled from 'styled-components';
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";

const WeekSettingStyle = styled.div`
    display: flex;
    width: 350px;
    margin: 50px auto;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;

    .arrow {
        color: #2B2CFF;
        font-size: 40px;
        cursor: pointer;
        &:hover {
            color: #5657FF;
        }
    }

    .date-text {
        margin-left: 30px;
        margin-right: 30px;
        font-size: 25px;
        font-weight: bold;
        color: #555555;
    }
`;

function WeekSetting( { date }) {
    const onLeftArrowClick = () => {
        console.log("왼쪽 화살표 클릭됨")
    }
    const onRightArrowClick = () => {
        console.log("오른쪽 화살표 클릭됨")
    }
    return(
        <WeekSettingStyle>
            <GoTriangleLeft className="arrow" onClick={onLeftArrowClick} />
            <div className="date-text">{date}</div>
            <GoTriangleRight className="arrow" onClick={onRightArrowClick}/>
        </WeekSettingStyle>
    )
}

export default WeekSetting;