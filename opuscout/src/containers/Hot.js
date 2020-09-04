import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import WeekSetting from '../components/WeekSetting';

const WeekSettingSection = styled.div`
    width: 100%;
    background: #ffffff;
`;

const HotItemSection = styled.div`
    height: 500px;
    background: pink;
`;

function Hot() {
    return (
        <>
            <WeekSettingSection>
                <WeekSetting date="2020.09.04"></WeekSetting>
            </WeekSettingSection>
            <HotItemSection></HotItemSection>
            <Footer></Footer>
        </>
    );
}

export default Hot;