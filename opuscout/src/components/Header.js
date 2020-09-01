import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const MenuItem = ({active, children, to}) => {
    return(
        <Link to={to} className="menu-item">
            {children}
        </Link>
    )    
}

const Header = () => {
    return (
        <div>
            <div className="header-container">
                <div className="web-logo">로고</div>
                <div className="web-name">OPUSCOUT</div>
                <div className="menu">
                    <MenuItem to={'/item'}>아이템 발굴</MenuItem>
                    <MenuItem to={'/keyword'}>키워드 탐색</MenuItem>
                    <MenuItem to={'/category'}>카테고리 분석</MenuItem>
                    <MenuItem to={'/hot'}>인기 아이템</MenuItem>
                </div>
            </div>
        </div>
    )
}

export default Header;