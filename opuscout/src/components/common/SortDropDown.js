import React from 'react';
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import styled from 'styled-components';
import { useSortingInfoDispatch, useSortingInfoState } from '../../provider/MainProvider';

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
    return(
        <SortDropDownStyle>
            <Dropdown className='name' text={kr_name} >
                <Dropdown.Menu className='item'>
                    <Dropdown.Item id="asc" text={ascName} onClick={(e, value, idx) => sortingInfoDispatch({ type: 'UPDATE_SORTING_INFO', sort_by: en_name, order_by: "asc"})}/>
                    <Dropdown.Item id="desc" text={descName} onClick={(e, value, idx) => sortingInfoDispatch({ type: 'UPDATE_SORTING_INFO', sort_by: en_name, order_by: "desc"})}/>
                </Dropdown.Menu>
            </Dropdown>
        </SortDropDownStyle>
    )
}

export default SortDropDown;