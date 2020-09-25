/* External Dependencies */
import React from 'react';
import styled from 'styled-components';
import { CgBorderStyleSolid } from "react-icons/cg";

/* Internal Dependencies */
import { useCategoryState, useRightItemState, useRightItemDispatch, useServerResponseState, useServerResponseDispatch } from '../../provider/MainProvider';
import { getItemList } from '../../api/api';
import { GetItemFilterData } from '../common/GetItemFilterData';

const ItemRightFilterStyle = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
    padding-right: 3%;
    padding-top: 2%;
    padding-bottom: 2%;
    box-sizing: border-box;
    float: right;

    .divide-left {
        width: 50%;
        height: 100%;
        flex: 1 1 auto;
        box-sizing: border-box;
    }

    .divide-right {
        width: 50%;
        height: 100%;
        flex: 1 1 auto;
        margin-left: 20px;
        box-sizing: border-box;
    }

    .max-min-name {
        color: #2B2CFF;  
        margin-bottom: 14px;  
    }

    .box {
        display: flex;
        margin-bottom: 20px;
    }

    .divide-center {
        flex: 1 1 auto;
        color: #808080;
        text-align: center;
        box-sizing: border-box;
    }
`;

const CompleteButtonStyle = styled.button`
    width: 100px;
    height: 35px;
    background: #2B2CFF;
    border-radius: 4px;
    color: #ffffff;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    float: right;
    border: none;
    outline: none;
    
    &:hover {
        // 커서 호버시 연한 파란색
        background: #2353FF;
    }
    &:active {
        // 클릭시 어두운 파란색
        background: #001aec;
    }
`;

const InputBoxStyle = styled.input`
    flex: 1 1 auto;
    width: 100px;
    box-sizing: border-box;
    border: 0.5px solid #2B2CFF;
    padding: 2px 5px;
    font-size: 16px;
    color: #000000;
    text-align: center;
    &:focus: {
        outline: none;
        color: transparent;
    }
`;

function ItemRightFilter() {   
    const categoryState = useCategoryState();
    const rightItemState = useRightItemState();
    const serverResponseDispatch = useServerResponseDispatch();
    
    const onComplete = () => {
        const checkedCategories = [];
        // 체크된 카테고리 가져오기
        categoryState.map( section => 
            section.map( category =>{
                if(category.check === true) {
                    checkedCategories.push(category.en_name);
                }
            })
        );
        
        // 서버 호출시 같이 보낼 바디 데이터
        const requestBody = {
            category : checkedCategories,
            sales : {
                min : rightItemState.item.minSales,
                max : rightItemState.item.maxSales
            },
            revenue : {
                min : rightItemState.item.minRevenue,
                max : rightItemState.item.maxRevenue
            },
            price : {
                min : rightItemState.item.minPrice,
                max : rightItemState.item.maxPrice
            },
            review : {
                min : rightItemState.item.minReview,
                max : rightItemState.item.maxReview
            },
            invest : {
                min : rightItemState.item.minInvest,
                max : rightItemState.item.maxInvest
            }
        }
        
        // api call
        getItemList(requestBody, serverResponseDispatch);
    }

    const rightItemDispatch = useRightItemDispatch();
    const onChange = (e) => {
        rightItemDispatch({
            type: 'ITEM_INPUT_CHANGE',
            id: e.target.id,
            value: e.target.value
        })
    }

    return(
        <ItemRightFilterStyle>
            <div className="divide-left">
                <div className="max-min-name">월 판매량</div>
                <div className="box">
                    <InputBoxStyle id="1" onChange={onChange} placeholder="최소 판매량"></InputBoxStyle>
                    <div className="divide-center"><CgBorderStyleSolid /></div>
                    <InputBoxStyle id="2" onChange={onChange} placeholder="최대 판매량"></InputBoxStyle>    
                </div>

                <div className="max-min-name">월 수익량</div>
                <div className="box">
                    <InputBoxStyle id="3" onChange={onChange} placeholder="최소 수익량"></InputBoxStyle>
                    <div className="divide-center"><CgBorderStyleSolid /></div>
                    <InputBoxStyle id="4" onChange={onChange} placeholder="최대 수익량"></InputBoxStyle>    
                </div>

                <div className="max-min-name">아이템 가격</div>
                <div className="box">
                    <InputBoxStyle id="5" onChange={onChange} placeholder="최소 가격"></InputBoxStyle>
                    <div className="divide-center"><CgBorderStyleSolid /></div>
                    <InputBoxStyle id="6" onChange={onChange} placeholder="최대 가격"></InputBoxStyle>    
                </div>
            </div>
            <div className="divide-right">
                <div className="max-min-name">리뷰수</div>
                <div className="box">
                    <InputBoxStyle id="7" onChange={onChange} placeholder="최소 리뷰수"></InputBoxStyle>
                    <div className="divide-center"><CgBorderStyleSolid /></div>
                    <InputBoxStyle id="8" onChange={onChange} placeholder="최대 리뷰수"></InputBoxStyle>    
                </div>

                <div className="max-min-name">초기 투자 비용</div>
                <div className="box">
                    <InputBoxStyle id="9" onChange={onChange} placeholder="최소 투자 비용"></InputBoxStyle>
                    <div className="divide-center"><CgBorderStyleSolid /></div>
                    <InputBoxStyle id="10" onChange={onChange} placeholder="최대 투자 비용"></InputBoxStyle>    
                </div>
                <CompleteButtonStyle onClick={onComplete}>설정 완료</CompleteButtonStyle>
            </div>
        </ItemRightFilterStyle>
    )
}

export default React.memo(ItemRightFilter);