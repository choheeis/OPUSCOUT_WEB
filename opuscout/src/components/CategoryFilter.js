import React from 'react';
import styled from 'styled-components';
import CategoryCheckBox from './CategoryCheckBox';

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
    return(
        <CategoryFilterStyle>
            <div className="title">카테고리</div>
            <div className="box">
                <div className="divide">
                    <CategoryCheckBox text="패션의류/잡화" done={true}></CategoryCheckBox>
                    <CategoryCheckBox text="뷰티" done={true}></CategoryCheckBox>
                    <CategoryCheckBox text="출산/유아동" done={false}></CategoryCheckBox>
                    <CategoryCheckBox text="식품"></CategoryCheckBox>
                    <CategoryCheckBox text="주방용품"></CategoryCheckBox>
                    <CategoryCheckBox text="생활용품"></CategoryCheckBox>
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

export default CategoryFilter;