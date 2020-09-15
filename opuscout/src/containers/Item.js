/* External Dependencies */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { CgSoftwareDownload } from "react-icons/cg";

/* Internal Dependencies */
import ListTitleBar from '../components/item/ItemListTitleBar'
import ListBar from '../components/common/ListBar';
import ItemFilter from '../components/item/ItemFilter';
import { useCategoryDispatch } from '../provider/MainProvider';

const FilterSection = styled.div`
    width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;
`;

const ListSection = styled.div`
    width: 90%;
    margin: 0 auto;
    margin-bottom: 30px;
    
    .download-button {
        width: 30px;
        height: 30px;
        color: #2B2CFF;
        margin-bottom: 4px;
        float: right;
    }
`;

const ListTest = [
    {
        index: 1,
        name : "opus",
        category : "food",
        brand : "nike",
        price : 30000,
        ranking : 1,
        month_sales : 100,
        day_sales : 2,
        revenue : 40000000,
        review : 3000,
        rating : 4,
        seller : 100,
        opportunity_count : 3 
    },
    {
        index: 2,
        name : "opus",
        category : "food",
        brand : "nike",
        price : 30000,
        ranking : 1,
        month_sales : 100,
        day_sales : 2,
        revenue : 40000000,
        review : 3000,
        rating : 4,
        seller : 100,
        opportunity_count : 3 
    },
    {
        index: 3,
        name : "opus",
        category : "food",
        brand : "nike",
        price : 30000,
        ranking : 1,
        month_sales : 100,
        day_sales : 2,
        revenue : 40000000,
        review : 3000,
        rating : 4,
        seller : 100,
        opportunity_count : 3 
    }
]

const Item = () => {
    const categoryDispatch = useCategoryDispatch();
    useEffect(() => {
        categoryDispatch({
            type: 'RESET'
        })
    }, [])
    
    return (
        <>
            <FilterSection>
                <ItemFilter>
                    아이템 발굴
                </ItemFilter>
            </FilterSection>
            <ListSection>
                <CgSoftwareDownload className="download-button"/>
                <ListTitleBar></ListTitleBar>
                {
                ListTest.map(
                    item => (
                        <ListBar index={item.index} name={item.name} brand={item.brand} price={item.price} ranking={item.ranking} month_sales={item.month_sales} day_sales={item.day_sales} revenue={item.revenue} review={item.review} star={item.start} seller={item.seller} opportunity={item.opportunity_count}></ListBar>
                    )
                )
                }
                
                {/* TODO: 여기다가 페이지 번호 뷰 넣어야함 */}
            </ListSection>
        </>
    );
}

export default React.memo(Item);