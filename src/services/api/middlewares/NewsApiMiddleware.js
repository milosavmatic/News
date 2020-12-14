import { BASE_URL } from '../config';
import { authHeaders, methodType } from '../commonApi';
import {
    API_LOAD_NEWS_REQUEST,
    API_LOAD_NEWS_REQUEST_ERROR,
    API_LOAD_NEWS_REQUEST_SUCCESS
} from '../../../scenes/news/duck/types';


const NewsApiMiddleware = ({dispatch}) => (next) => async (action) => {
    const {type = ''} = action
    switch (type) {
        case API_LOAD_NEWS_REQUEST:
            try {
                const { countryNews } = action.payload
                const response = await fetch(`${BASE_URL}top-headlines?country=${countryNews}`, {
                    method: methodType.get,
                    headers: authHeaders(),
                })

                const responseJson = await response.json()
                const {articles} = responseJson


                if (articles) {
                    dispatch({
                        type: API_LOAD_NEWS_REQUEST_SUCCESS,
                        payload: {articles, countryNews}
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
    next(action)
}

export default NewsApiMiddleware