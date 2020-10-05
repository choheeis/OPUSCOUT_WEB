/* External Dependencies */
import React from 'react';
import { Pagination } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import styled from 'styled-components';

/* Internal Dependencies */
import { useServerResponseDispatch, useSortingInfoDispatch, useSortingInfoState } from '../../provider/MainProvider';
import { getCategoryListBySortingAndPaging, getItemListBySortingAndPaging, getKeywordListBySortingAndPaging } from '../../api/api';
import { GetItemFilterData } from './GetItemFilterData';
import { GetKeywordFilterData } from '../keyword/GetKeywordFilterData';
import { GetCategoryFilterData } from '../category/GetCategoryFilterData';

function PageCount({ page_name }) {
    // state, dispatch scope
    const sortInfoState = useSortingInfoState();
    const sortInfoDispatch = useSortingInfoDispatch();
    const serverDispatch = useServerResponseDispatch();

    // get body to api
    const itemBody = GetItemFilterData();
    const keywordBody = GetKeywordFilterData();
    const categoryBody = GetCategoryFilterData();
    

    const onPageNumClick = (e, {activePage}) => {
        sortInfoDispatch({type: 'UPDATE_PAGE_INFO', page: activePage})
        if(page_name === "item"){
            getItemListBySortingAndPaging(activePage, sortInfoState.sort_by, sortInfoState.order_by, itemBody, serverDispatch)
        }else if(page_name === "keyword"){
            getKeywordListBySortingAndPaging(activePage, sortInfoState.sort_by, sortInfoState.order_by, keywordBody, serverDispatch)
        }else if(page_name === "category"){
            getCategoryListBySortingAndPaging(activePage, sortInfoState.sort_by, sortInfoState.order_by, categoryBody, serverDispatch)
        }else {
    
        }
    }

    return(
        <PageCountStyle>
            <Pagination
                boundaryRange={0}
                defaultActivePage={1}
                ellipsisItem={null}
                firstItem={null}
                lastItem={null}
                siblingRange={1}
                totalPages={10}
                onPageChange={onPageNumClick}
            />
        </PageCountStyle>
    )
}

export default PageCount;

const PageCountStyle = styled.div`
    display: flex;
    margin-top: 40px;
    justify-content: center;
    width: 100%;
`;