import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import WeekSetting from '../components/WeekSetting';
import HotItem from '../components/HotItem';

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
    return (
        <>
            <WeekSettingSection>
                <WeekSetting date="2020년 9월"></WeekSetting>
            </WeekSettingSection>
            <HotItemSection>
                <HotItem week_title="9월 첫째 주"></HotItem>
                <HotItem week_title="9월 둘째 주"></HotItem>
                <HotItem week_title="9월 셋째 주"></HotItem>
                <HotItem week_title="9월 넷째 주"></HotItem>
            </HotItemSection>
            <Footer></Footer>
        </>
    );
}

export default Hot;