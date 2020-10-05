/* External Dependencies */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { CgSoftwareDownload } from "react-icons/cg";

/* Internal Dependencies */
import ListTitleBar from '../components/keyword/KeywordTitleBar'
import ListBar from '../components/common/KeywordListBar';
import KeywordFilter from '../components/keyword/KeywordFilter';
import { useCategoryDispatch, useMiddleCategoryDispatch, useServerResponseDispatch, useServerResponseState } from '../provider/MainProvider';
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

const Keyword = () => { 
    const largeCategoryDispatch = useCategoryDispatch();
    const middleCategoryDispatch = useMiddleCategoryDispatch();
    const serverResponseDispatch = useServerResponseDispatch();
    const serverResponseState = useServerResponseState();
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
    }, [])
    
    return (
        <>
            <FilterSection>
                <KeywordFilter>
                    키워드 탐색
                </KeywordFilter>
            </FilterSection>
            <ListSection>
                <CgSoftwareDownload className="download-button"/>
                <ListTitleBar></ListTitleBar>
                {serverResponseState.map(
                    item => (
                        <ListBar key={item.index} index={item.index} keyword={item.keyword} price={item.price} month_sales={item.month_sales} revenue={item.revenue} review={item.review} seller={item.seller} opportunity_score={item.opportunity_score}></ListBar>
                    )
                )}
                <PageCount location="keyword"/>
            </ListSection>
        </>
    );
}

export default React.memo(Keyword)