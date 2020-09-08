import React from 'react';
import styled from 'styled-components';
import CategoryCheckBox from './CategoryCheckBox';
import { useFilterState } from '../contexts/FilterContext';

const CategoryFilterStyle = styled.div`
    width: 48%;
    height: 100%;
    padding: 2% 3%;
    box-sizing: border-box;
    float: left;
    
    .title {
        width: 100%;
        background: white;
        color: #2B2CFF;
        margin-bottom: 14px;
    }

    .box {
        width: 100%;
        height: 242px;
        display: flex;
        justify-content: space-around;
        border: 0.5px solid #2B2CFF;
    }
    
    .divide {
        height: 100%;
        flex: 1 1 auto;
        padding: 22px;
        box-sizing: border-box;
        color: black;
    }
`;

function CategoryFilter() {
    const filterState = useFilterState();
    return(
        <CategoryFilterStyle>
            <div className="title">카테고리</div>
            <div className="box">
                <div className="divide">
                    {filterState.map(category => (
                        <CategoryCheckBox
                            id={category.id}
                            text={category.text}
                            check={category.check}>
                        </CategoryCheckBox>
                    ))}
                </div>
                <div className="divide">
                    <CategoryCheckBox text="홈인테리어"></CategoryCheckBox>
                    <CategoryCheckBox text="가전디지털"></CategoryCheckBox>
                    <CategoryCheckBox text="스포츠/레저"></CategoryCheckBox>
                    <CategoryCheckBox text="자동차용품"></CategoryCheckBox>
                    <CategoryCheckBox text="도서/음반/DVD"></CategoryCheckBox>
                    <CategoryCheckBox text="완구/취미"></CategoryCheckBox>
                </div>
                <div className="divide">
                    <CategoryCheckBox text="문구/오피스"></CategoryCheckBox>
                    <CategoryCheckBox text="반려동물용품"></CategoryCheckBox>
                    <CategoryCheckBox text="헬스/건강식품"></CategoryCheckBox>
                </div>
            </div>
        </CategoryFilterStyle>
    )
}

export default React.memo(CategoryFilter);