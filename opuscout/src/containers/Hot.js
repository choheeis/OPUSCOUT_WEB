import React, { useEffect } from 'react';
import styled from 'styled-components';
import Footer from '../components/common/Footer';
import WeekSetting from '../components/hot/WeekSetting';
import HotItem from '../components/hot/HotItem';
import { CgViewMonth } from 'react-icons/cg';
import { getHotItem } from '../api/api';
import { useServerResponseDispatch, useServerResponseState } from '../provider/MainProvider';
import moment, { Moment } from 'moment';

const WeekSettingSection = styled.div`
    width: 100%;
    background: #ffffff;
`;

const HotItemSection = styled.div`
    display: flex;
    width: 90%;
    margin: 80px auto;
    justify-content: center;
`;

function Hot() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    //현재 월(month)의 주차 수 구하기
    const now = moment().utc(true);
    const weekOfMonth = now.week() - moment(now).startOf('month').week() + 1;

    const serverResponseDispatch = useServerResponseDispatch();
    const serverResponseState = useServerResponseState();
    
    useEffect(() => {
        // hot item api call
        //getHotItem(year, month, serverResponseDispatch) 이걸로 나중에 바꿔야함
        getHotItem(year, 3, serverResponseDispatch)
    }, [])

    var HotItems = [];
    for(var i = 1 ; i <= weekOfMonth ; i++) {
        var text = "";
        var item = [];
        if(i === 1) {
            text = "월 첫째 주"
            item = serverResponseState.week_1
        }else if (i === 2) {
            text = "월 둘째 주"
            item = serverResponseState.week_2
        }else if (i === 3) {
            text = "월 셋째 주"
            item = serverResponseState.week_3
        }else if (i === 4) {
            text = "월 넷째 주"
            item = serverResponseState.week_4
        }else if (i === 5){
            text = "월 다섯째 주"
            item = serverResponseState.week_5
        }else {
            text = ""
        }
        HotItems.push(<HotItem key={i} week_title={month + text} items={item}></HotItem>)
    }

    return (
        <>
            <WeekSettingSection>
                <WeekSetting date={year + "년 " + month + "월"}></WeekSetting>
            </WeekSettingSection>
            <HotItemSection>
                {(item) ? HotItems : null}
            </HotItemSection>
        </>
    );
}

export default Hot;