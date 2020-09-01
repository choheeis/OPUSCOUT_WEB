import React from 'react';
import './Header.css'

const MenuItem = ({active, children, to}) => {
    return(
        <div className="menu-item">
            {children}
        </div>
    )    
}

const Header = () => {
    return (
        <div>
            <div className="header-container">
                <div className="web-logo">로고</div>
                <div className="web-name">OPUSCOUT</div>
                <div className="menu">
                    <MenuItem>아이템 발굴</MenuItem>
                    <MenuItem>키워드 탐색</MenuItem>
                    <MenuItem>카테고리 분석</MenuItem>
                    <MenuItem>인기 아이템</MenuItem>
                </div>
            </div>
        </div>
    )
}

export default Header;