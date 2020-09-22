/* External Dependencies */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CgSoftwareDownload } from "react-icons/cg";

/* Internal Dependencies */
import ListTitleBar from '../components/item/ItemListTitleBar'
import ListBar from '../components/common/ListBar';
import ItemFilter from '../components/item/ItemFilter';
import { useCategoryDispatch, useCategoryState, useServerResponseState } from '../provider/MainProvider';
import { getUsers } from '../api/api';
import PageCount from '../components/common/PageCount';

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

function Item () {
    const categoryDispatch = useCategoryDispatch();
    const serverResponseState = useServerResponseState();

    useEffect(() => {
        categoryDispatch({
            type: 'RESET'
        })
    }, [])

    console.log('context로 확인한 응답 state');
    console.log(serverResponseState);

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
                {serverResponseState.map(
                    item => (
                        <ListBar key={item.index} index={item.index} name={item.name} brand={item.brand} category={item.category} price={item.price} ranking={item.ranking} month_sales={item.month_sales} day_sales={item.day_sales} revenue={item.revenue} review={item.review} rating={item.rating} seller={item.seller} opportunity_count={item.opportunity_count}></ListBar>
                    )
                )}
                {/* https://react.semantic-ui.com/addons/pagination/#types-compact */}
                <PageCount/>
            </ListSection>
        </>
    );
}

export default React.memo(Item);