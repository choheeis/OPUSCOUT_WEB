import React from 'react';
import styled from 'styled-components';

const SignupStyle = styled.div`
    width: 500px;
    margin: 0 auto;
    margin-top: 80px;
`;

const Title = styled.div`
    margin: 30px auto;
    font-size: 35px;
    color: #2B2CFF;
    text-align: center;
`;

const DetailTitle = styled.h2`
    color: #101010;
    font-size: 16px;
    font-weight: 400;
`;

const Input = styled.input`
    width: 500px;
    height: 48px;
    border-radius: 3px;
    border: solid 1px #dcdcdc;
    padding: 1.0rem;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 1.0rem;

    ::placeholder {
        width: 133px;
    }

    &:focus {
        border: solid 1px #3e4042;
    }
`;

const EmailButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    margin-top: 1.0rem;
    margin-bottom: 1.0rem;
    text-align: center;
    color: #ffffff;
    font-size: 16px;
    background: #FF8A8A;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
        // 커서 호버시 연한 파란색
        background: #FF6363;
        
    }
    &:active {
        // 클릭시 어두운 파란색
        background: #FFADAD;
    }
`;

const SignupButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    margin-top: 1.0rem;
    margin-bottom: 1.0rem;
    text-align: center;
    color: #ffffff;
    font-size: 20px;
    background: #2B2CFF;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
        // 커서 호버시 연한 파란색
        background: #2353FF;
    }
    &:active {
        // 클릭시 어두운 파란색
        background: #001aec;
    }
`;

function Signup() {
    return(
        <SignupStyle>
            <Title>회원가입</Title>
            <DetailTitle>이름</DetailTitle>
            <Input id="name" placeholder="홍길동"></Input>
            <DetailTitle>아이디</DetailTitle>
            <Input id="id" placeholder="example123"></Input>
            <DetailTitle>이메일</DetailTitle>
            <Input id="email" type="email" placeholder="example@naver.com"></Input>
            <EmailButton>이메일 인증코드 발송하기</EmailButton>
            <DetailTitle>이메일 인증 코드</DetailTitle>
            <Input id="code" placeholder="abcd"></Input>
            <DetailTitle>비밀번호 (8자 이상)</DetailTitle>
            <Input id="password" type="password" placeholder="**********"></Input>
            <SignupButton>회원가입</SignupButton>
        </SignupStyle>
    )
}

export default Signup;