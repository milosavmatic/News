import { API_LOAD_NEWS_REQUEST } from './types';


export const loadNews = (countryNews = 'gb') => dispatch => {
    dispatch({
        type: API_LOAD_NEWS_REQUEST,
        payload: {countryNews}
    })
}