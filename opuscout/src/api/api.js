import axios from 'axios';

// test를 위한 임의의 주소 (나중에 여기에 base url만 작성해놓기)
const apiServer = 'https://jsonplaceholder.typicode.com';

// ------------------------------------------
// item filter api
// 이렇게 하면 자동으로 이 함수에 반환됨
// ------------------------------------------
const getUsers = (checked) => (
    console.log('여기는 getUsers' + checked)
    //axios.get(`${apiServer}/users`)
);

export {
    getUsers
};