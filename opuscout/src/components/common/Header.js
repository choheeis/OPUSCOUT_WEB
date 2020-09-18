import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import Logo from '../../resource/opuscout_logo_white.svg';

const MenuItem = ({children, to}) => {
    return(
        <Link to={to} className="menu-item">
            {children}
        </Link>
    )    
}

const SignItem = ({children, to}) => {
    return(
        <Link to={to} className="sign-button">
            {children}
        </Link>
    )
}

const Header = () => {
    return (
        <div className="header">
            <div className="header-container">
                <div className="left-container">
                    <Link to={'/'}><img src={Logo} alt="오퍼스카웃 로고" className="web-name"></img></Link>
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