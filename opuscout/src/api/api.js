import axios from 'axios';
import opusServer from './opusServer.js';

// test를 위한 임의의 주소 (나중에 여기에 base url만 작성해놓기)
const serverBaseURL = 'https://jsonplaceholder.typicode.com';

const config = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com',
    headers : {"Content-type": "application/json; charset=UTF-8"}
})

// 테스트 api 호출 함수
export const getUsers = (checked) => (
    console.log('여기는 getUsers' + checked),
    axios.get(`${serverBaseURL}/users`)
);

// 포스트 성공 예시
export const postPostWithAsync = async (body) => {
    try {
        const response = await opusServer.post('/posts', body)
        // 이 response로 응답 데이터 옴
        console.log(response);    
    } catch (error) {
        console.log(error);
    }
    
}

// export const getItemList = async (body) => {
//     try {
//         // 해야할일
//         // 1. 서버 베이스 주소 바꾸기
//         // 2. config 다시 구성하기
//         const response = await axios.post(`${serverBaseURL}/item/filter`, body, config)
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

export const getItemListWithPageAndSort = async (body) => {
    try {
        const response = await axios.post(`${serverBaseURL}/item/filter`, body, config)
        console.log('api통신 후');
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

//`/partners/${id}` --> url에 이렇게 넣으면 되는 듯

export const getItemList = async (body) => {
    try {
        const response = await opusServer.post('/item/filter', body)
        console.log(response);   
    } catch (error) {
        console.log(error);
    }
}