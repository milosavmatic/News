import {
    API_LOAD_SEARCH_NEWS,
    API_LOAD_SEARCH_NEWS_ERROR,
    API_LOAD_SEARCH_NEWS_SUCCESS
} from '../../../scenes/search/duck/types';
import { BASE_URL } from '../config';
import { authHeaders, methodType } from '../commonApi';


const SearchMiddleware = ({dispatch}) => next => async action => {
    const {type = ''} = action
    switch (type) {
        case API_LOAD_SEARCH_NEWS:
            try {
                const {value} = action.payload
                const response = await fetch(`${BASE_URL}everything?q=${value}`, {
                    method: methodType.get,
                    headers: authHeaders()
                })

                const responseJson = await response.json()
                const {articles} = responseJson

                if (articles) {
                    dispatch({
                        type: API_LOAD_SEARCH_NEWS_SUCCESS,
                        payload: {articles}
                    })
                }

            } catch (error) {
                dispatch({
                    type: API_LOAD_SEARCH_NEWS_ERROR,
                    payload: {error}
                })
            }
            break
        default:
            break
    }
    next(action)
}

export default SearchMiddleware