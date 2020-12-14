import {
    API_LOAD_ENTERTAINMENT_CATEGORY_NEWS_SUCCESS,
    API_LOAD_GENERAL_CATEGORY_NEWS_SUCCESS,
    API_LOAD_HEALTH_CATEGORY_NEWS_SUCCESS,
    API_LOAD_SCIENCE_CATEGORY_NEWS_SUCCESS,
    API_LOAD_SPORT_CATEGORY_NEWS_SUCCESS,
    API_LOAD_TECHNOLOGY_CATEGORY_NEWS_SUCCESS
} from './types';


const initialsState = {
    entertainmentCategory: [],
    generalCategory: [],
    healthCategory: [],
    scienceCategory: [],
    sportCategory: [],
    technologyCategory: [],
    country: 'gb'
}


const reducer = (state = initialsState, action) => {
    switch (action.type && action.type) {
        case API_LOAD_ENTERTAINMENT_CATEGORY_NEWS_SUCCESS:
            return {...state, ...action.payload}
        case API_LOAD_GENERAL_CATEGORY_NEWS_SUCCESS:
            return {...state, ...action.payload}
        case API_LOAD_HEALTH_CATEGORY_NEWS_SUCCESS:
            return {...state, ...action.payload}
        case API_LOAD_SCIENCE_CATEGORY_NEWS_SUCCESS:
            return {...state, ...action.payload}
        case API_LOAD_SPORT_CATEGORY_NEWS_SUCCESS:
            return {...state, ...action.payload}
        case API_LOAD_TECHNOLOGY_CATEGORY_NEWS_SUCCESS:
            return {...state, ...action.payload}
        default:
            return state
    }
}

export default reducer;