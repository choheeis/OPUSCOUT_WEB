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
                        <Feature></Feature>
                        <Feature></Feature>
                    </RowStyle>
                    <RowStyle></RowStyle>
                </div>
            </IntroductionSection>
        </>
    );
}

export default Home;