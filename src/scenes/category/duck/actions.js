import {
    API_LOAD_ENTERTAINMENT_CATEGORY_NEWS,
    API_LOAD_GENERAL_CATEGORY_NEWS,
    API_LOAD_HEALTH_CATEGORY_NEWS,
    API_LOAD_SCIENCE_CATEGORY_NEWS,
    API_LOAD_SPORT_CATEGORY_NEWS,
    API_LOAD_TECHNOLOGY_CATEGORY_NEWS
} from './types';


export const loadEntertainmentCategory = (country = 'gb') => dispatch => {
    dispatch({
        type: API_LOAD_ENTERTAINMENT_CATEGORY_NEWS,
        payload: {country}
    })
}

export const loadGeneralCategory = (country = 'gb') => dispatch => {
    dispatch({
        type: API_LOAD_GENERAL_CATEGORY_NEWS,
        payload: {country}
    })
}

export const loadHealthCategory = (country = 'gb') => dispatch => {
    dispatch({
        type: API_LOAD_HEALTH_CATEGORY_NEWS,
        payload: {country}
    })
}

export const loadScienceCategory = (country = 'gb') => dispatch => {
    dispatch({
        type: API_LOAD_SCIENCE_CATEGORY_NEWS,
        payload: {country}
    })
}

export const loadSportCategory = (country = 'gb') => dispatch => {
    dispatch({
        type: API_LOAD_SPORT_CATEGORY_NEWS,
        payload: {country}
    })
}

export const loadTechnologyCategory = (country = 'gb') => dispatch => {
    dispatch({
        type: API_LOAD_TECHNOLOGY_CATEGORY_NEWS,
        payload: {country}
    })
}