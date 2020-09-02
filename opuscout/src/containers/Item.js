import React from 'react';
import './Item.css';
import FilterBackground from '../components/FilterBackground';

const Item = () => {
    return (
        <div className="item">
            <div className="item-container">
                <FilterBackground>아이템 발굴
                    
                </FilterBackground>
                <div className="contents3">컨텐츠3</div>
                <div className="contents4">컨텐츠4</div> 
            </div>
        </div>
    );
}

export default Item;