import React from 'react';
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import styled from 'styled-components';
import { useServerResponseDispatch, useSortingInfoDispatch, useSortingInfoState } from '../../provider/MainProvider';
import { getItemListBySortingAndPaging } from '../../api/api';
import { GetFilterData } from './GetFilterData';

const SortDropDownStyle = styled.div`
    display: flex;
    flex: 1 1 auto;
    .name {
        font-size: 18px;
        color: #000000;
        margin: 0px;
    }
`;

function SortDropDown({ en_name, kr_name, ascName, descName}) {
    const sortingInfoDispatch = useSortingInfoDispatch();
    const sortingInfoState = useSortingInfoState();
    const body = GetFilterData();
    const serverResponseDispatch = useServerResponseDispatch();
    return(
        <SortDropDownStyle>
            <Dropdown className='name' text={kr_name} >
                <Dropdown.Menu className='item'>
                    <Dropdown.Item id="asc" text={ascName} onClick={(e, value, idx) => {
                        sortingInfoDispatch({ type: 'UPDATE_SORTING_INFO', sort_by: en_name, order_by: "asc", page: sortingInfoState.page})
                        getItemListBySortingAndPaging(sortingInfoState.page, sortingInfoState.sort_by, sortingInfoState.order_by, body, serverResponseDispatch)
                    }}/>
                    <Dropdown.Item id="desc" text={descName} onClick={(e, value, idx) => {
                        sortingInfoDispatch({ type: 'UPDATE_SORTING_INFO', sort_by: en_name, order_by: "desc", page: sortingInfoState.page})
                        getItemListBySortingAndPaging(sortingInfoState.page, sortingInfoState.sort_by, sortingInfoState.order_by, body, serverResponseDispatch)
                    }}/>
                </Dropdown.Menu>
            </Dropdown>
        </SortDropDownStyle>
    )
}

export default SortDropDown;