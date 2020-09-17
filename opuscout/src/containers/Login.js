import React, { useState } from 'react';
import styled from 'styled-components';

const LoginStyle = styled.div`
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

const LoginButton = styled.div`
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

const Hr = styled.hr`
    border: solid 0.6px #dcdcdc;
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
`;

const GrayButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    margin-top: 1.0rem;
    margin-bottom: 1.0rem;
    text-align: center;
    color: #000000;
    font-size: 16px;
    background: #E3E3E3;
    border-radius: 3px;
    border: 1px solid #BABABA;
    cursor: pointer;

    &:hover {
        // 커서 호버시 연한 파란색
        background: #CDCDCD;
    }
    &:active {
        // 클릭시 어두운 파란색
        background: #F0F0F0;
    }
`;

function Login() {
    var id = '';
    var password = '';
    const onIdChange = (e) => {
        id = e.target.value;
    }
    const onPasswordChange = (e) => {
        password = e.target.value;
    }

    const onLoginClick = () => {
        // TODO : id, password 변수에 input에서 받아온 값들 넣어놓음
        // 여기서 로그인 api 호출하기
        console.log('로그인 클릭됨');
        console.log(id + " " + password);
    }
    

    return(
        <LoginStyle>
            <Title>로그인</Title>
            <DetailTitle>아이디</DetailTitle>
            <Input onChange={onIdChange} id="id" placeholder="abcdefg123"></Input>
            <DetailTitle>비밀번호</DetailTitle>
            <Input onChange={onPasswordChange} id="pwd" type="password" placeholder="**********"></Input>
            <LoginButton onClick={onLoginClick}>로그인</LoginButton>
            <Hr></Hr>
            <GrayButton>아이디, 비밀번호 찾기</GrayButton>
            <GrayButton>회원가입 하기</GrayButton>
        </LoginStyle>
    )
}

export default Login;