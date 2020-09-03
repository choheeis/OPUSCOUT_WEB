import React from 'react';
import './Item.css';
import styled from 'styled-components';
import FilterBaseLayout from '../components/FilterBaseLayout';
import ListTitleBar from '../components/ListTitleBar'
import { CgSoftwareDownload } from "react-icons/cg";

const FilterSection = styled.div`
    width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;
    background: #e2e2e2;
`;

const ListSection = styled.div`
    height: 500px;
    width: 90%;
    margin: 0 auto;
    margin-bottom: 30px;
    background: yellow;
    
    .download-button {
        width: 30px;
        height: 30px;
        color: #2B2CFF;
        margin-bottom: 4px;
        float: right;
    }
`;

const FooterSection = styled.div`
    height: 500px;
    width: 100%;
    background: pink;
`;

const Item = () => {
    return (
        <>
            <FilterSection>
                <FilterBaseLayout>
                    아이템 발굴
                </FilterBaseLayout>
            </FilterSection>
            <ListSection>
                <CgSoftwareDownload className="download-button"/>
                <ListTitleBar></ListTitleBar>
            </ListSection>
            <FooterSection>

            </FooterSection>
        </>
    );
}

export default Item;