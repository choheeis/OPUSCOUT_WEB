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
    }

    .date-text {
        margin-left: 30px;
        margin-right: 30px;
        font-size: 25px;
        color: #555555;
    }
`;

function WeekSetting( { date }) {
    return(
        <WeekSettingStyle>
            <GoTriangleLeft className="arrow" />
            <div className="date-text">{date}</div>
            <GoTriangleRight className="arrow"/>
        </WeekSettingStyle>
    )
}

export default WeekSetting;