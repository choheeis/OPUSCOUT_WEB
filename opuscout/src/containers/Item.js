import React from 'react';
import './Item.css';
import styled from 'styled-components';
import FilterBaseLayout from '../components/FilterBaseLayout';
import ListTitleBar from '../components/ListTitleBar'
import { CgSoftwareDownload } from "react-icons/cg";
import ListBar from '../components/ListBar';

const FilterSection = styled.div`
    width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;
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
    background: skyblue;
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
                <ListBar index="1" name="설화수 자음 2종 세트 + 쇼핑백" brand="설화수" price="66,400원" ranking="1" month_sales="150" day_sales="3" revenue="4,030,000원" review="3,500" star="5" seller="10" opportunity="10"></ListBar>
            </ListSection>
            <FooterSection>

            </FooterSection>
        </>
    );
}

export default Item;