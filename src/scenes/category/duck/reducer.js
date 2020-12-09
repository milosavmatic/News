import { API_LOAD_CATEGORY_NEWS_SUCCESS } from './types';


const initialsState = {
    articlesCategory: [],
}


const reducer = (state = initialsState, action) => {
    switch (action.type && action.type) {
        case API_LOAD_CATEGORY_NEWS_SUCCESS:
            return {...state, ...action.payload}
        default:
            return state
    }
}

export default reducer;