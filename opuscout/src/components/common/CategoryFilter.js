/* External Dependencies */
import React from 'react';
import styled from 'styled-components';

/* Internal Dependencies */
import CategoryCheckBox from './CategoryCheckBox';
import { useCategoryState } from '../../provider/MainProvider';

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
    const categoryState = useCategoryState();
    
    return(
        <CategoryFilterStyle>
            <div className="title">카테고리</div>
            <div className="box">
                <div className="divide">
                    {categoryState[0].map(category => (
                        <CategoryCheckBox
                            key={category.id}
                            id={category.id}
                            text={category.name}
                            check={category.check}>
                        </CategoryCheckBox>
                    ))}
                </div>
                <div className="divide">
                    {categoryState[1].map(category => (
                        <CategoryCheckBox
                            key={category.id}
                            id={category.id}
                            text={category.name}
                            check={category.check}>
                        </CategoryCheckBox>
                    ))}
                </div>
                <div className="divide">
                {categoryState[2].map(category => (
                        <CategoryCheckBox
                            key={category.id}
                            id={category.id}
                            text={category.name}
                            check={category.check}>
                        </CategoryCheckBox>
                    ))}
                </div>
            </div>
        </CategoryFilterStyle>
    )
}

export default React.memo(CategoryFilter);