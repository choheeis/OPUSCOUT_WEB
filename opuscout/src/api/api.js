import opusServer from './opusServer.js';

// 포스트 성공 예시
export const postPostWithAsync = async (body) => {
    try {
        const response = await opusServer.post('/posts', body)
        // 이 response로 응답 데이터 옴
        console.log('응답 데이터 확인');    
        console.log(response);    
    } catch (error) {
        console.log(error);
    }
}
//`/partners/${id}` --> url에 이렇게 넣으면 되는 듯

export const getItemList = async (body, dispatch) => {
    try {
        const response = await opusServer.post('/item/filter', body) 
        dispatch({
            type: 'SET_ITEM_RESPONSE_DATA',
            value: response.data.item
        })
    } catch (error) {
        console.log('api call error');
        console.log(error);
    }
}