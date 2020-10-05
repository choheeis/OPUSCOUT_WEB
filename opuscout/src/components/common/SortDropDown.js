import React, { useEffect } from 'react';
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import styled from 'styled-components';
import { useServerResponseDispatch, useSortingInfoDispatch, useSortingInfoState } from '../../provider/MainProvider';
import { getCategoryListBySortingAndPaging, getItemListBySortingAndPaging } from '../../api/api';
import { GetItemFilterData } from './GetItemFilterData';
import { GetCategoryFilterData } from './GetCategoryFilterData';

const SortDropDownStyle = styled.div`
    display: flex;
    flex: 1 1 auto;
    .name {
        font-size: 18px;
        color: #000000;
        margin: 0px;
    }
`;

function SortDropDown({ page_name, en_name, kr_name, ascName, descName}) {
    const sortingInfoDispatch = useSortingInfoDispatch();
    const sortingInfoState = useSortingInfoState();
    const serverResponseDispatch = useServerResponseDispatch();
    const categoryBody = GetCategoryFilterData();

    useEffect(() => {
        console.log('이펙트')
        getCategoryListBySortingAndPaging(sortingInfoState.page, sortingInfoState.sort_by, sortingInfoState.order_by, categoryBody, serverResponseDispatch)
    }, [sortingInfoState])

    const onDropDownAscClick = (e, value, idx) => {
        if(page_name === "item"){

        }else if(page_name === "keyword"){
    
        }else if(page_name === "category"){
            sortingInfoDispatch({ type: 'UPDATE_SORTING_INFO', sort_by: en_name, order_by: "asc", page: sortingInfoState.page})
            //getCategoryListBySortingAndPaging(sortingInfoState.page, sortingInfoState.sort_by, sortingInfoState.order_by, categoryBody, serverResponseDispatch)
            console.log('카테고리 페이지 입니다~')
        }else{
    
        }    
    }

    const onDropDownDescClick = (e, value, idx) => {
        if(page_name === "item"){

        }else if(page_name === "keyword"){
    
        }else if(page_name === "category"){
            sortingInfoDispatch({ type: 'UPDATE_SORTING_INFO', sort_by: en_name, order_by: "desc", page: sortingInfoState.page})
            //getCategoryListBySortingAndPaging(sortingInfoState.page, sortingInfoState.sort_by, sortingInfoState.order_by, categoryBody, serverResponseDispatch)
            console.log('카테고리 페이지 입니다~')
        }else{
    
        }    
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