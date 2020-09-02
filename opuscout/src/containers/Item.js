import React from 'react';
import './Item.css';
import styled from 'styled-components';
import FilterBaseLayout from '../components/FilterBaseLayout';

const FilterSection = styled.div`
    width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;
    background: #e2e2e2;
`;

const ListSection = styled.div`
    height: 500px;
    width: 100%;
    background: yellow;
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

            </ListSection>
            <FooterSection>

            </FooterSection>
        </>
        // <div className="item">
        //     <div className="item-container">
        //         <ItemFilter>아이템 발굴</ItemFilter>
        //         <div className="contents3">컨텐츠3</div>
        //         <div className="contents4">컨텐츠4</div> 
        //     </div>
        // </div>
    );
}

export default Item;