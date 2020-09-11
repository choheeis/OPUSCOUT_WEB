import React, { useEffect } from 'react';
import styled from 'styled-components';
import ListTitleBar from '../components/item/ItemListTitleBar'
import { CgSoftwareDownload } from "react-icons/cg";
import ListBar from '../components/common/ListBar';
import Footer from '../components/common/Footer';
import KeywordFilter from '../components/keyword/KeywordFilter';
import { useRightItemDispatch, useCategoryDispatch } from '../provider/MainProvider';


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

const Keyword = ({ history }) => { 
    const testDispatch = useCategoryDispatch();
    // context가 return 
    // useEffect(() => history.listen(() => {
    //     testDispatch({
    //         type: 'TEST'
    //     })
    // }), [])

    useEffect(() => {
        testDispatch({
            type: 'TEST'
        })
        
        return () => {
            console.log('컴포넌트가 화면에서 사라짐');
        }
    }, [])
    
    // testDispatch({
    //     type: 'TEST'
    // })
    // const resetDispatch = useResetDispatch();
    // resetDispatch({
    //     type: 'TEST'
    // })
    //const history = syncHistoryWithStore(browserHistory, store)

    //history.listen(location => analyticsService.track(location.pathname))
    return (
        <>
            <FilterSection>
                <KeywordFilter>
                    키워드 탐색
                </KeywordFilter>
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
                {/* TODO: 여기다가 페이지 번호 뷰 넣어야함 */}
            </ListSection>
            <Footer></Footer>
        </>
    );
}

export default Keyword;