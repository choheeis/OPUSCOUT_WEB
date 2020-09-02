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
                    <CategoryCheckBox>패션의류/잡화</CategoryCheckBox>
                    <CategoryCheckBox>뷰티</CategoryCheckBox>
                    <CategoryCheckBox>출산/유아동</CategoryCheckBox>
                    <CategoryCheckBox>식품</CategoryCheckBox>
                    <CategoryCheckBox>주방용품</CategoryCheckBox>
                    <CategoryCheckBox>생활용품</CategoryCheckBox>
                </div>
                <div className="divide">
                    <CategoryCheckBox>홈인테리어</CategoryCheckBox>
                    <CategoryCheckBox>가전디지털</CategoryCheckBox>
                    <CategoryCheckBox>스포츠/레저</CategoryCheckBox>
                    <CategoryCheckBox>자동차용품</CategoryCheckBox>
                    <CategoryCheckBox>도서/음반/DVD</CategoryCheckBox>
                    <CategoryCheckBox>완구/취미</CategoryCheckBox>
                </div>
                <div className="divide">
                    <CategoryCheckBox>문구/오피스</CategoryCheckBox>
                    <CategoryCheckBox>반려동물용품</CategoryCheckBox>
                    <CategoryCheckBox>헬스/건강식품</CategoryCheckBox>
                </div>
            </div>
        </CategoryFilterStyle>
    )
}

export default CategoryFilter;