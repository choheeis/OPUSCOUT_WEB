import React from 'react';
import styled from 'styled-components';
import { useMiddleCategoryState } from '../../provider/MainProvider';
import CategoryCheckBox from './CategoryCheckBox';

const CategoryMiddleFilterStyle = styled.div`
    padding: 2% 2%;
    box-sizing: border-box;
    width: 100%;

    .title {
        width: 100%;
        color: #2B2CFF;
        font-weight: bold;
        padding-left: 2%;
    }

    .row-container {
        display: flex;
        width: 100%;

        .large-category-container {
            color: white;
            margin: 2%;
            flex: 1 1 auto;

            .large-category-title {
                color : #2B2CFF;
                font-weight: bold;
            }

            .categories {
                height: 200px;
                overflow-y: scroll;
            }
        }
    }

    .input-row-container {
        display: flex;
    }

`;

function CategoryMiddleFilter() {
    const middleCategoryState = useMiddleCategoryState();
    return(
        <CategoryMiddleFilterStyle>
            <div className="title">카테고리</div>
            <div className="row-container">
                <div className="large-category-container">
                    <div className="large-category-title">패션의류/잡화</div>
                    <div className="categories">
                    {middleCategoryState.fashion.map(category => (
                        <CategoryCheckBox
                            key={category.id}
                            id={category.id}
                            text={category.name}
                            check={category.check}
                            categorySize='middle'
                            largeCategory='fashion'>
                        </CategoryCheckBox>
                    ))}
                    </div>
                </div>
                <div className="large-category-container">
                    <div className="large-category-title">뷰티</div>
                    <div className="categories">
                    {middleCategoryState.beauty.map(category => (
                        <CategoryCheckBox
                            key={category.id}
                            id={category.id}
                            text={category.name}
                            check={category.check}
                            categorySize='middle'>
                        </CategoryCheckBox>
                    ))}
                    </div>
                </div>
                <div className="large-category-container">
                    <div className="large-category-title">출산/유아동</div>
                    <div className="categories">
                    {middleCategoryState.child.map(category => (
                        <CategoryCheckBox
                            key={category.id}
                            id={category.id}
                            text={category.name}
                            check={category.check}
                            categorySize='middle'>
                        </CategoryCheckBox>
                    ))}
                    </div>
                </div>
                <div className="large-category-container">
                    <div className="large-category-title">식품</div>
                    <div className="categories">
                    {middleCategoryState.food.map(category => (
                        <CategoryCheckBox
                            key={category.id}
                            id={category.id}
                            text={category.name}
                            check={category.check}
                            categorySize='middle'>
                        </CategoryCheckBox>
                    ))}
                    </div>
                </div>
                <div className="large-category-container">
                    <div className="large-category-title">주방용품</div>
                    <div className="categories">
                    {middleCategoryState.kitchen.map(category => (
                        <CategoryCheckBox
                            key={category.id}
                            id={category.id}
                            text={category.name}
                            check={category.check}
                            categorySize='middle'>
                        </CategoryCheckBox>
                    ))}
                    </div>
                </div>
            </div>
            <div className="row-container">
                <div className="large-category-container">
                    <div className="large-category-title">생활용품</div>
                    <div className="categories">
                    {middleCategoryState.life_goods.map(category => (
                        <CategoryCheckBox
                            key={category.id}
                            id={category.id}
                            text={category.name}
                            check={category.check}
                            categorySize='middle'>
                        </CategoryCheckBox>
                    ))}
                    </div>
                </div>
                <div className="large-category-container">
                    <div className="large-category-title">홈인테리어</div>
                    <div className="categories">
                    {middleCategoryState.interior.map(category => (
                        <CategoryCheckBox
                            key={category.id}
                            id={category.id}
                            text={category.name}
                            check={category.check}
                            categorySize='middle'>
                        </CategoryCheckBox>
                    ))}
                    </div>
                </div>
                <div className="large-category-container">
                    <div className="large-category-title">가전디지털</div>
                    <div className="categories">
                    {middleCategoryState.digital.map(category => (
                        <CategoryCheckBox
                            key={category.id}
                            id={category.id}
                            text={category.name}
                            check={category.check}
                            categorySize='middle'>
                        </CategoryCheckBox>
                    ))}
                    </div>
                </div>
                <div className="large-category-container">
                    <div className="large-category-title">스포츠/레저</div>
                    <div className="categories">
                    {middleCategoryState.sport.map(category => (
                        <CategoryCheckBox
                            key={category.id}
                            id={category.id}
                            text={category.name}
                            check={category.check}
                            categorySize='middle'>
                        </CategoryCheckBox>
                    ))}
                    </div>
                </div>
                <div className="large-category-container">
                    <div className="large-category-title">자동차용품</div>
                    <div className="categories">
                    {middleCategoryState.car.map(category => (
                        <CategoryCheckBox
                            key={category.id}
                            id={category.id}
                            text={category.name}
                            check={category.check}
                            categorySize='middle'>
                        </CategoryCheckBox>
                    ))}
                    </div>
                </div>
            </div>
            <div className="row-container">
                <div className="large-category-container">
                    <div className="large-category-title">도서/음반/DVD</div>
                    <div className="categories">
                    {middleCategoryState.book.map(category => (
                        <CategoryCheckBox
                            key={category.id}
                            id={category.id}
                            text={category.name}
                            check={category.check}
                            categorySize='middle'>
                        </CategoryCheckBox>
                    ))}
                    </div>
                </div>
                <div className="large-category-container">
                    <div className="large-category-title">완구/취미</div>
                    <div className="categories">
                    {middleCategoryState.toy.map(category => (
                        <CategoryCheckBox
                            key={category.id}
                            id={category.id}
                            text={category.name}
                            check={category.check}
                            categorySize='middle'>
                        </CategoryCheckBox>
                    ))}
                    </div>
                </div>
                <div className="large-category-container">
                    <div className="large-category-title">문구/오피스</div>
                    <div className="categories">
                    {middleCategoryState.office.map(category => (
                        <CategoryCheckBox
                            key={category.id}
                            id={category.id}
                            text={category.name}
                            check={category.check}
                            categorySize='middle'>
                        </CategoryCheckBox>
                    ))}
                    </div>
                </div>
                <div className="large-category-container">
                    <div className="large-category-title">반려동물용품</div>
                    <div className="categories">
                    {middleCategoryState.pet.map(category => (
                        <CategoryCheckBox
                            key={category.id}
                            id={category.id}
                            text={category.name}
                            check={category.check}
                            categorySize='middle'>
                        </CategoryCheckBox>
                    ))}
                    </div>
                </div>
                <div className="large-category-container">
                    <div className="large-category-title">헬스/건강식품</div>
                    <div className="categories">
                    {middleCategoryState.health.map(category => (
                        <CategoryCheckBox
                            key={category.id}
                            id={category.id}
                            text={category.name}
                            check={category.check}
                            categorySize='middle'>
                        </CategoryCheckBox>
                    ))}
                    </div>
                </div>
            </div>
        </CategoryMiddleFilterStyle>
    )
}

export default CategoryMiddleFilter;