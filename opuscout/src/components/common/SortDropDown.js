import React from 'react';
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import styled from 'styled-components';

const SortDropDownStyle = styled.div`
    display: flex;
    flex: 1 1 auto;
    .name {
        font-size: 18px;
        color: #000000;
        margin: 0px;
    }
`;

function SortDropDown({ name, ascName, descName}) {
    return(
        <SortDropDownStyle>
            <Dropdown className='name' text={name}>
                <Dropdown.Menu className='item'>
                    <Dropdown.Item text={ascName} />
                    <Dropdown.Item text={descName} />
                </Dropdown.Menu>
            </Dropdown>
        </SortDropDownStyle>
    )
}

export default SortDropDown;