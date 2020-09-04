import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    width: 100%;
    background: #ffffff;
    border-top: 0.1px solid #ecebef;
    font-size: 14px;
    text-align: center;
    color: #898595;
`;

function Footer() {
    return(
        <FooterStyle>
            상호명 :OPUS / 사업자 번호 : 2341525-134123-321512 / 대표자 : 김초희, 설민혁, 우승윤 / 전화번호 : 010-2352-0300 <br></br>
            주소 : 서울 특별시 강남구 테헤란로 311(역삼동) 아남타워 7층 [SW 마에스트로 연수센터]
        </FooterStyle>
    )
}

export default Footer;