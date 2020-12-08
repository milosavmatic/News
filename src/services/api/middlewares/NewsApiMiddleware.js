import { BASE_URL } from '../config';
import { authHeaders, methodType } from '../commonApi';
import {
    API_LOAD_NEWS_REQUEST,
    API_LOAD_NEWS_REQUEST_ERROR,
    API_LOAD_NEWS_REQUEST_SUCCESS
} from '../../../scenes/news/duck/types';


const NewsApiMiddlware = ({ dispatch }) => (next) => async (action) => {
    const { type = '' } = action
    switch (type)
        case API_LOAD_NEWS_REQUEST:
try {
    const response = await fetch(`${BASE_URL}top-headlines?country=en`, {
        method: methodType.get,
        headers: authHeaders(),
    })

    const responseJson = await response.json()
    const { articles } = responseJson

    if(articles) {
        dispatch({
            type: API_LOAD_NEWS_REQUEST_SUCCESS,
            payload: { articles }
        })
    }

} catch (error) {
   dispatch({
       type: API_LOAD_NEWS_REQUEST_ERROR,
       payload: {error}
   })
}
break
        default:
            break
}

export default NewsApiMiddlware