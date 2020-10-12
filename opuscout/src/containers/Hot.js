import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import HotItem from '../components/hot/HotItem';
import { getHotItem } from '../api/api';
import { useServerResponseDispatch, useServerResponseState } from '../provider/MainProvider';
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";
import { getMaxWeeks } from '../util/getMaxWeeks';

function Hot() {
    // state, dispatch scope
    const serverResponseState = useServerResponseState();
    const serverResponseDispatch = useServerResponseDispatch();

    // 현재 년, 월 세팅
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;

    // 왼쪽, 오른쪽 화살표 버튼 클릭시 년, 월 상태 업데이트
    const [{changedYear, changedMonth}, setChangedYear] = useState({changedYear : year, changedMonth : month})
    
    useEffect(() => {
        serverResponseDispatch({
            type: 'RESET'
        })
        // hot item api call
        getHotItem(changedYear, changedMonth, serverResponseDispatch)
    }, [changedYear, changedMonth])

    var HotItems = [];
    for(var i = 1 ; i <= getMaxWeeks(changedYear, changedMonth) ; i++) {
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
        }else if (i === 6){
            text = "월 여섯째 주"
            item = serverResponseState.week_5
        }else {
            text = ""
        }
        HotItems.push(<HotItem key={i} week_title={changedMonth + text} items={item}></HotItem>)
    }

    const onLeftArrowClick = () => {
        var tmpYear = changedYear
        var tmpMonth = changedMonth
        if(changedMonth === 1) {
            tmpMonth = 12
            tmpYear -= 1
        }else{
            tmpMonth -= 1
        }
        setChangedYear({changedYear : tmpYear, changedMonth : tmpMonth})
    }

    const onRightArrowClick = () => {
        var tmpYear = changedYear
        var tmpMonth = changedMonth
        if(changedMonth === 12) {
            tmpMonth = 1
            tmpYear += 1
        }else{
            tmpMonth += 1
        }
        setChangedYear({changedYear : tmpYear, changedMonth : tmpMonth})
    }

    return (
        <>
            <WeekSettingSection>
                <GoTriangleLeft className="left-arrow" onClick={onLeftArrowClick}></GoTriangleLeft>
                <div className="year-month-title">{changedYear + "년 " + changedMonth + "월"}</div>
                <GoTriangleRight className="right-arrow" onClick={onRightArrowClick}></GoTriangleRight>
            </WeekSettingSection>
            <HotItemSection>
                {console.log('핫 아이템 안'),
                console.log(item),
                (item) ? HotItems : null}
            </HotItemSection>
        </>
    );
}

export default Hot;

const WeekSettingSection = styled.div`
    display: flex;
    width: 300px;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    margin-top: 80px;
    font-size: 40px;
    color: #2B2CFF;
    
    .year-month-title {
        margin-left: 30px;
        margin-right: 30px;
        font-size: 25px;
        font-weight: bold;
        color: #555555;
    }

    .left-arrow {
        cursor: pointer;
        &:hover {
            color: #5657FF;
        }
    }

    .right-arrow {
        cursor: pointer;
        &:hover {
            color: #5657FF;
        }
    }
`;

const HotItemSection = styled.div`
    display: flex;
    width: 90%;
    margin: 80px auto;
    justify-content: center;
`;