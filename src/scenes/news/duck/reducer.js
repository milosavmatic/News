import { API_LOAD_NEWS_REQUEST_SUCCESS } from './types';


const initialsState = {
    article: [],
}


const reducer = (state = initialsState, action) => {
    switch (action.type && action.type) {
        case API_LOAD_NEWS_REQUEST_SUCCESS:
            return {...state, ...action.payload}
        default:
            return state
    }
}

export default reducer;