import React from 'react';
import { Pagination } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import styled from 'styled-components';
import { useRightItemState, useServerResponseDispatch, useSortingInfoDispatch, useSortingInfoState } from '../../provider/MainProvider';
import { getItemListBySortingAndPaging } from '../../api/api';
import { GetItemFilterData } from './GetItemFilterData';

const PageCountStyle = styled.div`
    display: flex;
    margin-top: 40px;
    justify-content: center;
    width: 100%;
`;

function PageCount() {
    const sortInfoDispatch = useSortingInfoDispatch();
    const sortInfoState = useSortingInfoState();
    const body = GetItemFilterData();
    const dispatch = useServerResponseDispatch();
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
                onPageChange={(e, {activePage}) => {
                    sortInfoDispatch({type: 'UPDATE_PAGE_INFO', page: activePage})
                    getItemListBySortingAndPaging(activePage, sortInfoState.sort_by, sortInfoState.order_by, body, dispatch)
                }}
            />
        </PageCountStyle>
    )
}

export default PageCount;