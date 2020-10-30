/* External Dependencies */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { CgSoftwareDownload } from "react-icons/cg";

/* Internal Dependencies */
import ListBar from '../components/category/CategoryListBar';
import { useCategoryDispatch, useMiddleCategoryDispatch, useServerResponseDispatch, useServerResponseState } from '../provider/MainProvider';
import CateFilter from '../components/category/CateFilter';
import PageCount from '../components/common/PageCount';
import CategoryTitleBar from '../components/category/CategoryTitleBar';

const Category = () => { 
    // state, dispatch scope
    const largeCategoryDispatch = useCategoryDispatch();
    const middleCategoryDispatch = useMiddleCategoryDispatch();
    const serverResponseDispatch = useServerResponseDispatch();
    const serverResponseState = useServerResponseState();
    console.log('카테고리')
    console.log(serverResponseState)
    
    useEffect(() => {
        largeCategoryDispatch({
            type: 'RESET'
        })
        middleCategoryDispatch({
            type: 'RESET'
        })
        serverResponseDispatch({
            type: 'RESET'
        })
        console.log('리셋')
        
    }, [])
    
    return (
        <>
            <FilterSection>
                <CateFilter>
                    카테고리 분석
                </CateFilter>
            </FilterSection>
            <ListSection>
                <CgSoftwareDownload className="download-button"/>
                <CategoryTitleBar></CategoryTitleBar>
                {(Array.isArray(serverResponseState) === false) ? null : serverResponseState.map(
                    item => (
                        <ListBar key={item.index} index={item.index} category={item.Scategory} price={item.price} month_sales={item.month_sales} revenue={item.revenue} review={item.review} seller={item.seller} opportunity_score={item.opportunity_score}></ListBar>
                    )
                )}
                <PageCount page_name="category"/>
            </ListSection>
        </>
    );
}

export default Category;

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