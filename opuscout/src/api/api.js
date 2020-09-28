import opusServer from './opusServer.js';

// 아이템 페이지 - 필터 적용한 아이템 리스트 api
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