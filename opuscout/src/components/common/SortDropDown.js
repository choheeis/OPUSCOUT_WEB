/* External Dependencies */
import React, { useEffect } from 'react';
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import styled from 'styled-components';

/* Internal Dependencies */
import { useServerResponseDispatch, useSortingInfoDispatch, useSortingInfoState } from '../../provider/MainProvider';
import { getCategoryListBySortingAndPaging, getItemListBySortingAndPaging, getKeywordListBySortingAndPaging } from '../../api/api';
import { GetItemFilterData } from './GetItemFilterData';
import { GetCategoryFilterData } from '../category/GetCategoryFilterData';
import { GetKeywordFilterData } from '../keyword/GetKeywordFilterData';

function SortDropDown({ page_name, en_name, kr_name, ascName, descName}) {
    // state, dispatch scope
    const sortingInfoState = useSortingInfoState();
    const sortingInfoDispatch = useSortingInfoDispatch();
    const serverResponseDispatch = useServerResponseDispatch();

    // get body to api
    const categoryBody = GetCategoryFilterData();
    const keywordBody = GetKeywordFilterData();

    useEffect(() => {
        if(page_name === "item"){

        }else if(page_name === "keyword"){
            getKeywordListBySortingAndPaging(sortingInfoState.page, sortingInfoState.sort_by, sortingInfoState.order_by, keywordBody, serverResponseDispatch)
        }else if(page_name === "category"){
            getCategoryListBySortingAndPaging(sortingInfoState.page, sortingInfoState.sort_by, sortingInfoState.order_by, categoryBody, serverResponseDispatch)
        }else {

        }
        
    }, [sortingInfoState])

    const onDropDownAscClick = (e, value, idx) => {
        sortingInfoDispatch({ type: 'UPDATE_SORTING_INFO', sort_by: en_name, order_by: "asc", page: sortingInfoState.page})   
    }

    const onDropDownDescClick = (e, value, idx) => {
        sortingInfoDispatch({ type: 'UPDATE_SORTING_INFO', sort_by: en_name, order_by: "desc", page: sortingInfoState.page}) 
    }
    
    return(
        <SortDropDownStyle>
            <Dropdown className='name' text={kr_name} >
                <Dropdown.Menu className='item'>
                    <Dropdown.Item id="asc" text={ascName} onClick={onDropDownAscClick}/>
                    <Dropdown.Item id="desc" text={descName} onClick={onDropDownDescClick}/>
                </Dropdown.Menu>
            </Dropdown>
        </SortDropDownStyle>
    )
}

export default SortDropDown;

const SortDropDownStyle = styled.div`
    display: flex;
    flex: 1 1 auto;
    .name {
        font-size: 18px;
        color: #000000;
        margin: 0px;
    }
`;