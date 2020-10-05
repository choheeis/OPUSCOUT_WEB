/* External Dependencies */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { CgSoftwareDownload } from "react-icons/cg";

/* Internal Dependencies */
import ListTitleBar from '../components/item/ItemListTitleBar'
import ListBar from '../components/item/ItemListBar';
import ItemFilter from '../components/item/ItemFilter';
import { useCategoryDispatch, useServerResponseDispatch, useServerResponseState } from '../provider/MainProvider';
import PageCount from '../components/common/PageCount';

function Item () {
    // state, dispatch scope
    const largeCategoryDispatch = useCategoryDispatch();
    const serverResponseState = useServerResponseState();
    const serverResponseDispatch = useServerResponseDispatch();

    useEffect(() => {
        largeCategoryDispatch({
            type: 'RESET'
        })
        serverResponseDispatch({
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
                {serverResponseState.map(
                    item => (
                        <ListBar key={item.index} index={item.index} name={item.name} brand={item.brand} category={item.category} price={item.price} ranking={item.ranking} month_sales={item.month_sales} day_sales={item.day_sales} revenue={item.revenue} review={item.review} rating={item.rating} seller={item.seller} opportunity_score={item.opportunity_score}></ListBar>
                    )
                )}
                {/* https://react.semantic-ui.com/addons/pagination/#types-compact */}
                <PageCount page_name="item"/>
            </ListSection>
        </>
    );
}

export default React.memo(Item);

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