import { useAccessState } from '../provider/MainProvider.js';
import opusServer from './opusServer.js';
import {
  goBack,
  goTo,
  popToTop,
  Link,
  Router,
  getCurrent,
  getComponentStack
} from 'react-chrome-extension-router';
import Home from '../containers/Home.js';



// 아이템 페이지 - 필터 적용한 아이템 리스트 api
export const getItemList = async (body, dispatch) => {
  console.log(body)
    try {
        const response = await opusServer.post('/item/filter', body) 
        console.log('응답성공')
        console.log(response.data.item)
        
        dispatch({
            type: 'SET_ITEM_RESPONSE_DATA',
            value: response.data.item
        })
    } catch (error) {
        console.log('api call error');
        console.log(error);
    }
}

// 아이템 페이지 - 정렬 및 페이지 번호 적용한 아이템 리스트 api
export const getItemListBySortingAndPaging = async (page, sort_by , order_by , body, dispatch) => {
    try {
        const response = await opusServer.post(`/item/filter/${page}&${sort_by}?order=${order_by}`, body)
        dispatch({
            type: 'SET_ITEM_RESPONSE_DATA',
            value: response.data.item
        })
    } catch (error) {
        console.log('api call error');
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
          console.log(error.config);
    }
}

// 키워드 페이지 - 필터 적용한 아이템 리스트 api
export const getKeywordList = async (body, dispatch) => {
    try {
        const response = await opusServer.post('/keyword/filter', body)
        console.log('응답 성공');
        console.log(response)
        dispatch({
            type: 'SET_KEYWORD_RESPONSE_DATA',
            value: response.data.keyword
        })
    } catch (error) {
        console.log('api call error');
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
          console.log(error.config);
    }
}

export const getKeywordListBySortingAndPaging = async (page, sort_by , order_by , body, dispatch) => {
  try {
    const response = await opusServer.post(`/keyword/filter/${page}&${sort_by}?order=${order_by}`, body)
        console.log('응답성공')
        console.log(response.data.keyword)
        dispatch({
            type: 'SET_KEYWORD_RESPONSE_DATA',
            value: response.data.keyword
        })
  } catch (error) {
    console.log('api call error');
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
          console.log(error.config);
  }
}

export const getCategoryItem = async (body, dispatch) => {
    try {
        const response = await opusServer.post('/category/filter', body)
        console.log('응답 성공');
        console.log(response)
        dispatch({
            type: 'SET_CATEGORY_RESPONSE_DATA',
            value: response.data.category
        })
    } catch (error) {
        console.log('api call error');
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
          console.log(error.config);
    }
}

export const getCategoryListBySortingAndPaging = async (page, sort_by , order_by , body, dispatch) => {
  try {
    const response = await opusServer.post(`/category/filter/${page}&${sort_by}?order=${order_by}`, body)
        dispatch({
            type: 'SET_CATEGORY_RESPONSE_DATA',
            value: response.data.category
        })
  } catch (error) {
    console.log('api call error');
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
          console.log(error.config);
  }
}

export const getHotItem = async (year, month, dispatch) => {
    try {
        const response = await opusServer.get(`/hot/${year}&${month}`)
        console.log('응답성공');
        console.log(response);
        dispatch({
            type: 'SET_HOT_RESPONSE_DATA',
            value: response.data.hot
        })
    } catch (error) {
        console.log('api call error');
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
          console.log(error.config);
    }
}

// send code to emil
export const sendCode = async (email) => {
  const body = {
    "email" : email
  }
  try {
    const response = await opusServer.post('/signup/email/demand', body)
    console.log('응답성공');
    console.log(response.status);
    alert("입력하신 메일 주소로 이메일 인증 코드를 발송했습니다.")
  } catch (error) {
    console.log('api call error');
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
          console.log(error.config);
  }
}

// check code
export const checkCode = async (email, code, dispatch) => {
  const body = {
    "email" : email,
    "code" : code
  }
  try {
    const response = await opusServer.post('/signup/email/verify', body)
    console.log('응답성공');
    console.log(response);
    if(response.status === 200) {
      alert("이메일 인증에 성공했습니다.")
      dispatch({
        type : 'CHECK',
        id : "code"
      })
    }else{
      alert("이메일 인증에 실패했습니다. 다시 시도해주세요.")
    }
  } catch (error) {
    console.log('api call error');
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
          console.log(error.config);
  }
}

// check code
export const requestSignUp = async (state, dispatch) => {
  const body = {
    id : state.signUp.id,
    password : state.signUp.password,
    email : state.signUp.email,
    name : state.signUp.name,
    registration_id : "a1234"
  }
  alert("가입을 축하드립니다!")
  // registration 스펠링 문서랑 다름 확인하기
  try {
    const response = await opusServer.post('/signup', body)
    console.log('응답성공');
    console.log(response);
  } catch (error) {
    console.log('api call error');
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
          console.log(error.config);
  }
}

// login
export const login = async (id, password, dispatch) => {
  const body = {
    "id" : id,
    "password" : password
  }
  alert("로그인 성공")
  window.location = '/';
  try {
    const response = await opusServer.post('/login', body)
    console.log('응답성공');
    console.log(response);
    // 응답 성공이면 로그인 성공 alert 띄우고 헤더의 로그인을 로그아웃으로 바꿔야함 로그인 했을 때 UI도 있어야할 듯..?
  } catch (error) {
    console.log('api call error');
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
          console.log(error.config);
  }
}