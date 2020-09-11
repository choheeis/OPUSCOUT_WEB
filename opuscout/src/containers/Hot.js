import React from 'react';
import styled from 'styled-components';
import Footer from '../components/common/Footer';
import WeekSetting from '../components/hot/WeekSetting';
import HotItem from '../components/hot/HotItem';
import { CgViewMonth } from 'react-icons/cg';

const WeekSettingSection = styled.div`
    width: 100%;
    background: #ffffff;
`;

const HotItemSection = styled.div`
    display: flex;
    width: 90%;
    margin: 80px auto;
    justify-content: center;

    .test1 {
        height: 50px;
        flex: 1 1 auto;
        background: skyblue;
    }
`;

function Hot() {

    const today = new Date();
    const yearAndMonth = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long'
    })
    const month = today.toLocaleDateString('ko-KR', {
        month: 'long'
    })
    return (
        <>
            <WeekSettingSection>
                <WeekSetting date={yearAndMonth}></WeekSetting>
            </WeekSettingSection>
            <HotItemSection>
                <HotItem week_title={month + " 첫째 주"}></HotItem>
                <HotItem week_title={month + " 둘째 주"}></HotItem>
                <HotItem week_title={month + " 셋째 주"}></HotItem>
                <HotItem week_title={month + " 넷째 주"}></HotItem>
            </HotItemSection>
            <Footer></Footer>
        </>
    );
}

export default Hot;