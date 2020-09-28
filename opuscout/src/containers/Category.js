/* External Dependencies */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { CgSoftwareDownload } from "react-icons/cg";

/* Internal Dependencies */
import ListTitleBar from '../components/item/ItemListTitleBar'
import ListBar from '../components/common/ItemListBar';
import Footer from '../components/common/Footer';
import { useCategoryDispatch, useMiddleCategoryDispatch, useServerResponseDispatch } from '../provider/MainProvider';
import CateFilter from '../components/category/CateFilter';
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

const Category = () => { 
    const largeCategoryDispatch = useCategoryDispatch();
    const middleCategoryDispatch = useMiddleCategoryDispatch();
    const serverResponseDispatch = useServerResponseDispatch();
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
                <CateFilter>
                    카테고리 분석
                </CateFilter>
            </FilterSection>
            <ListSection>
                <CgSoftwareDownload className="download-button"/>
                <ListTitleBar></ListTitleBar>
                <ListBar index="1" name="설화수 자음 2종 세트 + 쇼핑백" brand="설화수" price="66,400원" ranking="1" month_sales="150" day_sales="3" revenue="4,030,000원" review="3,500" star="5" seller="10" opportunity="10"></ListBar>
                <ListBar index="1" name="설화수 자음 2종 세트 + 쇼핑백" brand="설화수" price="66,400원" ranking="1" month_sales="150" day_sales="3" revenue="4,030,000원" review="3,500" star="5" seller="10" opportunity="10"></ListBar>
                <ListBar index="1" name="설화수 자음 2종 세트 + 쇼핑백" brand="설화수" price="66,400원" ranking="1" month_sales="150" day_sales="3" revenue="4,030,000원" review="3,500" star="5" seller="10" opportunity="10"></ListBar>
                <ListBar index="1" name="설화수 자음 2종 세트 + 쇼핑백" brand="설화수" price="66,400원" ranking="1" month_sales="150" day_sales="3" revenue="4,030,000원" review="3,500" star="5" seller="10" opportunity="10"></ListBar>
                <ListBar index="1" name="설화수 자음 2종 세트 + 쇼핑백" brand="설화수" price="66,400원" ranking="1" month_sales="150" day_sales="3" revenue="4,030,000원" review="3,500" star="5" seller="10" opportunity="10"></ListBar>
                <ListBar index="1" name="설화수 자음 2종 세트 + 쇼핑백" brand="설화수" price="66,400원" ranking="1" month_sales="150" day_sales="3" revenue="4,030,000원" review="3,500" star="5" seller="10" opportunity="10"></ListBar>
                <ListBar index="1" name="설화수 자음 2종 세트 + 쇼핑백" brand="설화수" price="66,400원" ranking="1" month_sales="150" day_sales="3" revenue="4,030,000원" review="3,500" star="5" seller="10" opportunity="10"></ListBar>
                <ListBar index="1" name="설화수 자음 2종 세트 + 쇼핑백" brand="설화수" price="66,400원" ranking="1" month_sales="150" day_sales="3" revenue="4,030,000원" review="3,500" star="5" seller="10" opportunity="10"></ListBar>
                <ListBar index="1" name="설화수 자음 2종 세트 + 쇼핑백" brand="설화수" price="66,400원" ranking="1" month_sales="150" day_sales="3" revenue="4,030,000원" review="3,500" star="5" seller="10" opportunity="10"></ListBar>
                <ListBar index="1" name="설화수 자음 2종 세트 + 쇼핑백" brand="설화수" price="66,400원" ranking="1" month_sales="150" day_sales="3" revenue="4,030,000원" review="3,500" star="5" seller="10" opportunity="10"></ListBar>
                <PageCount />
            </ListSection>
            <Footer></Footer>
        </>
    );
}

export default Category;