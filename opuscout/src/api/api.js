import opusServer from './opusServer.js';

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
//`/partners/${id}` --> url에 이렇게 넣으면 되는 듯

export const getItemList = async (body, dispatch) => {
    try {
        const response = await opusServer.post('/item/filter', body) 
        console.log('응답 성공');
        console.log(response.data);
        dispatch({
            type: 'SET_ITEM_RESPONSE_DATA',
            value: response.data
        })
        return response.data;
    } catch (error) {
        console.log('에러');
        console.log(error);
    }
}