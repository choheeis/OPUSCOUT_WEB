import React, { useEffect } from 'react';
import styled from 'styled-components';
import { checkCode, requestSignUp, sendCode } from '../api/api';
import { useAccessDispatch, useAccessState } from '../provider/MainProvider';

function Signup() {
    // state, dispatch scope
    const accessDispatch = useAccessDispatch();
    const accessState = useAccessState();

    useEffect(() => {
        accessDispatch({
            type: 'RESET'
        })
    }, [])

    const onChange = (e) => {
        accessDispatch({
            type : 'INPUT_CHANGE',
            id : e.target.id,
            value : e.target.value
        })
    }

    const onSendCode = () => {
        // api call
        sendCode(accessState.signUp.email)
    }

    const onCheckCode = () => {
        // api call
        checkCode(accessState.signUp.email, accessState.signUp.code, accessDispatch)
    }

    const onSignUp = () => {
        // check 가 id랑 code 둘 다 true인지 확인해야함
        if(accessState.check.code === true) {
            // api call
            requestSignUp(accessState, accessDispatch)
        }else{
            alert('이메일 코드 인증을 해주세요!')
        }
    }

    return(
        <SignupStyle>
            <Title>회원가입</Title>
            <DetailTitle>이름</DetailTitle>
            <Input id="name" placeholder="홍길동" onChange={onChange}></Input>
            <DetailTitle>아이디</DetailTitle>
            <Input id="id" placeholder="example123" onChange={onChange}></Input>
            <DetailTitle>이메일</DetailTitle>
            <Input id="email" type="email" placeholder="example@naver.com" onChange={onChange}></Input>
            <EmailButton onClick={onSendCode}>이메일 인증코드 발송하기</EmailButton>
            <DetailTitle>이메일 인증 코드</DetailTitle>
            <Input id="code" placeholder="abcd" onChange={onChange}></Input>
            <CodeCheckButton onClick={onCheckCode}>코드 인증하기</CodeCheckButton>
            <DetailTitle>비밀번호 (8자 이상)</DetailTitle>
            <Input id="password" type="password" placeholder="**********" onChange={onChange}></Input>
            <SignupButton onClick={onSignUp}>회원가입</SignupButton>
        </SignupStyle>
    )
}

export default Signup;

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
    font-weight: 400;
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

const CodeCheckButton = styled.div`
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