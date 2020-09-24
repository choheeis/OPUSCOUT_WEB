import React from 'react';
import styled from 'styled-components';
import CategoryCheckBox from './CategoryCheckBox';

const CategoryMiddleFilterStyle = styled.div`
    background: skyblue;
    padding: 2% 2%;
    box-sizing: border-box;
    width: 100%;

    .title {
        width: 100%;
        color: #2B2CFF;
    }

    .row-container {
        display: flex;
        width: 100%;
        background: pink;

        .large-category-container {
            color: white;
            margin: 2%;
            flex: 1 1 auto;

            .large-category-title {
                color : #2B2CFF;
            }

            .categories {
                height: 200px;
                overflow: scroll;
            }
        }
    }

`;

function CategoryMiddleFilter() {
    return(
        <CategoryMiddleFilterStyle>
            <div className="title">카테고리</div>
            <div className="row-container">
                <div className="large-category-container">
                    <div className="large-category-title">패션의류/잡화</div>
                    <div className="categories">
                    <CategoryCheckBox
                        id="1"
                        text="여성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="2"
                        text="남성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="베이비패션(0~3세)"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="여성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="2"
                        text="남성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="베이비패션(0~3세)"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="2"
                        text="남성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="베이비패션(0~3세)"
                        check="false">
                    </CategoryCheckBox>
                    </div>
                </div>
                <div className="large-category-container">
                    <div className="large-category-title">뷰티</div>
                    <div className="categories">
                    <CategoryCheckBox
                        id="1"
                        text="여성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="2"
                        text="남성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="베이비패션(0~3세)"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="여성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="2"
                        text="남성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="베이비패션(0~3세)"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="2"
                        text="남성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="베이비패션(0~3세)"
                        check="false">
                    </CategoryCheckBox>
                    </div>
                </div>
                <div className="large-category-container">
                    <div className="large-category-title">출산/유아동</div>
                    <div className="categories">
                    <CategoryCheckBox
                        id="1"
                        text="여성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="2"
                        text="남성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="베이비패션(0~3세)"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="여성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="2"
                        text="남성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="베이비패션(0~3세)"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="2"
                        text="남성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="베이비패션(0~3세)"
                        check="false">
                    </CategoryCheckBox>
                    </div>
                </div>
                <div className="large-category-container">
                    <div className="large-category-title">식품</div>
                    <div className="categories">
                    <CategoryCheckBox
                        id="1"
                        text="여성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="2"
                        text="남성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="베이비패션(0~3세)"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="여성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="2"
                        text="남성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="베이비패션(0~3세)"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="2"
                        text="남성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="베이비패션(0~3세)"
                        check="false">
                    </CategoryCheckBox>
                    </div>
                </div>
                <div className="large-category-container">
                    <div className="large-category-title">주방용품</div>
                    <div className="categories">
                    <CategoryCheckBox
                        id="1"
                        text="여성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="2"
                        text="남성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="베이비패션(0~3세)"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="여성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="2"
                        text="남성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="베이비패션(0~3세)"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="2"
                        text="남성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="베이비패션(0~3세)"
                        check="false">
                    </CategoryCheckBox>
                    </div>
                </div>
            </div>
            <div className="row-container">
                <div className="large-category-container">
                    <div className="large-category-title">패션의류/잡화</div>
                    <div className="categories">
                    <CategoryCheckBox
                        id="1"
                        text="여성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="2"
                        text="남성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="베이비패션(0~3세)"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="여성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="2"
                        text="남성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="베이비패션(0~3세)"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="2"
                        text="남성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="베이비패션(0~3세)"
                        check="false">
                    </CategoryCheckBox>
                    </div>
                </div>
                <div className="large-category-container">
                    <div className="large-category-title">뷰티</div>
                    <div className="categories">
                    <CategoryCheckBox
                        id="1"
                        text="여성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="2"
                        text="남성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="베이비패션(0~3세)"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="여성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="2"
                        text="남성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="베이비패션(0~3세)"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="2"
                        text="남성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="베이비패션(0~3세)"
                        check="false">
                    </CategoryCheckBox>
                    </div>
                </div>
                <div className="large-category-container">
                    <div className="large-category-title">출산/유아동</div>
                    <div className="categories">
                    <CategoryCheckBox
                        id="1"
                        text="여성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="2"
                        text="남성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="베이비패션(0~3세)"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="여성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="2"
                        text="남성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="베이비패션(0~3세)"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="2"
                        text="남성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="베이비패션(0~3세)"
                        check="false">
                    </CategoryCheckBox>
                    </div>
                </div>
                <div className="large-category-container">
                    <div className="large-category-title">식품</div>
                    <div className="categories">
                    <CategoryCheckBox
                        id="1"
                        text="여성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="2"
                        text="남성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="베이비패션(0~3세)"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="여성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="2"
                        text="남성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="베이비패션(0~3세)"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="2"
                        text="남성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="베이비패션(0~3세)"
                        check="false">
                    </CategoryCheckBox>
                    </div>
                </div>
                <div className="large-category-container">
                    <div className="large-category-title">주방용품</div>
                    <div className="categories">
                    <CategoryCheckBox
                        id="1"
                        text="여성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="2"
                        text="남성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="베이비패션(0~3세)"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="여성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="2"
                        text="남성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="베이비패션(0~3세)"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="2"
                        text="남성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="베이비패션(0~3세)"
                        check="false">
                    </CategoryCheckBox>
                    </div>
                </div>
            </div>
            <div className="row-container">
                <div className="large-category-container">
                    <div className="large-category-title">패션의류/잡화</div>
                    <div className="categories">
                    <CategoryCheckBox
                        id="1"
                        text="여성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="2"
                        text="남성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="베이비패션(0~3세)"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="여성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="2"
                        text="남성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="베이비패션(0~3세)"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="2"
                        text="남성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="베이비패션(0~3세)"
                        check="false">
                    </CategoryCheckBox>
                    </div>
                </div>
                <div className="large-category-container">
                    <div className="large-category-title">뷰티</div>
                    <div className="categories">
                    <CategoryCheckBox
                        id="1"
                        text="여성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="2"
                        text="남성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="베이비패션(0~3세)"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="여성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="2"
                        text="남성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="베이비패션(0~3세)"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="2"
                        text="남성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="베이비패션(0~3세)"
                        check="false">
                    </CategoryCheckBox>
                    </div>
                </div>
                <div className="large-category-container">
                    <div className="large-category-title">출산/유아동</div>
                    <div className="categories">
                    <CategoryCheckBox
                        id="1"
                        text="여성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="2"
                        text="남성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="베이비패션(0~3세)"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="여성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="2"
                        text="남성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="베이비패션(0~3세)"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="2"
                        text="남성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="베이비패션(0~3세)"
                        check="false">
                    </CategoryCheckBox>
                    </div>
                </div>
                <div className="large-category-container">
                    <div className="large-category-title">식품</div>
                    <div className="categories">
                    <CategoryCheckBox
                        id="1"
                        text="여성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="2"
                        text="남성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="베이비패션(0~3세)"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="여성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="2"
                        text="남성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="베이비패션(0~3세)"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="2"
                        text="남성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="베이비패션(0~3세)"
                        check="false">
                    </CategoryCheckBox>
                    </div>
                </div>
                <div className="large-category-container">
                    <div className="large-category-title">주방용품</div>
                    <div className="categories">
                    <CategoryCheckBox
                        id="1"
                        text="여성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="2"
                        text="남성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="베이비패션(0~3세)"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="여성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="2"
                        text="남성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="베이비패션(0~3세)"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="2"
                        text="남성패션"
                        check="false">
                    </CategoryCheckBox>
                    <CategoryCheckBox
                        id="1"
                        text="베이비패션(0~3세)"
                        check="false">
                    </CategoryCheckBox>
                    </div>
                </div>
            </div>
        </CategoryMiddleFilterStyle>
    )
}

export default CategoryMiddleFilter;