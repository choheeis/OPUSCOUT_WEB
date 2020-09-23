import opusServer from './opusServer.js';

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

// dispatch 인자 넣어야함
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
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log('응답')
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log('리퀘스트');
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
          console.log(error.config);
    }
}