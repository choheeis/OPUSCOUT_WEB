import React from 'react';
import styled from 'styled-components';
import Feature from '../components/home/Feature';

const ContentSection = styled.div`
    display: flex;
    background: #E4E4E4;
    height: 500px;
`;

const IntroductionSection = styled.div`
    .container {
        width: 60%;
        margin: 0 auto;
    }

    .introduction {
        margin-top: 100px;
        margin-bottom: 80px;
        font-size: 30px;
        text-align: center;
    }
`;

const RowStyle = styled.div`
    display: flex;
    height: 500px;
`;

function Home() {
    return (
        <>
            <ContentSection>djkdjk</ContentSection>
            <IntroductionSection>
                <div className="container">
                    <div className="introduction">Introduction</div>
                    <RowStyle>
                        <Feature name="아이템 발굴" description="온라인 오픈마켓 내에서 경쟁력 있는 판매 아이템을 찾아보세요!" img="item"></Feature>
                        <Feature name="키워드 탐색" description="판매 아이템에 적합한 키워드들을 찾아보세요!" img="keyword"></Feature>
                    </RowStyle>
                    <RowStyle>
                        <Feature name="카테고리 분석" description="다양한 필터를 통해 온라인 오픈마켓에서 사용되는 카테고리를 분석해보세요!" img="category"></Feature>
                        <Feature name="인기 아이템" description="매주 업데이트 되는 인기 아이템을 확인해보세요!" img="hot"></Feature>
                    </RowStyle>
                </div>
            </IntroductionSection>
        </>
    );
}

export default Home;