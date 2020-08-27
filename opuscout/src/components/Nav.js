import React from 'react';
import './Nav.scss'

function Nav() {
    return (
        <div className="NavigationContainer">
            <div className="OpuscoutTitle">OPUSCOUT</div>
            <div className="MenuContainer">상품 발굴</div>
            <div className="MenuContainer">상품 추이 분석</div>
            <div className="MenuContainer">키워드 탐색</div>
            <div className="MenuContainer">문의/공지</div>
        </div>
    );
}

export default Nav;