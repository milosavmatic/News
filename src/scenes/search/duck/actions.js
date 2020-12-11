import { API_LOAD_SEARCH_NEWS, UPDATE_SEARCH } from './types';


export const loadSearch = (value) => dispatch => {
    dispatch({
        type: API_LOAD_SEARCH_NEWS,
        payload: {value}
    })
}
