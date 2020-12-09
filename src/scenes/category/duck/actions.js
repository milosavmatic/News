import { API_LOAD_CATEGORY_NEWS } from './types';


export const loadCategory = (country = 'gb', category) => dispatch => {
        dispatch({
            type: API_LOAD_CATEGORY_NEWS,
            payload: { country, category }
        })
}