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

const SignItem = ({active, children, to}) => {
    return(
        <Link to={to} className="sign-button">
            {children}
        </Link>
    )
}
//<div className="web-name">OPUSCOUT</div>
const Header = () => {
    return (
        <div className="header">
            <div className="header-container">
                <div className="left-container">
                    <div className="web-logo">로고</div>
                    <Link to={'/'} className="web-name">OPUSCOUT</Link>
                    <div className="menu-group">
                        <MenuItem to={'/item'}>아이템 발굴</MenuItem>
                        <MenuItem to={'/keyword'}>키워드 탐색</MenuItem>
                        <MenuItem to={'/category'}>카테고리 분석</MenuItem>
                        <MenuItem to={'/hot'}>인기 아이템</MenuItem>
                    </div>
                </div>
                <div className="right-container">
                    <div className="sign-group">
                        <SignItem to={'/login'}>로그인</SignItem>
                        <SignItem to={'/signup'}>회원가입</SignItem>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;