import {
    API_LOAD_ENTERTAINMENT_CATEGORY_NEWS,
    API_LOAD_ENTERTAINMENT_CATEGORY_NEWS_ERROR,
    API_LOAD_ENTERTAINMENT_CATEGORY_NEWS_SUCCESS,
    API_LOAD_GENERAL_CATEGORY_NEWS,
    API_LOAD_GENERAL_CATEGORY_NEWS_ERROR,
    API_LOAD_GENERAL_CATEGORY_NEWS_SUCCESS,
    API_LOAD_HEALTH_CATEGORY_NEWS,
    API_LOAD_HEALTH_CATEGORY_NEWS_ERROR,
    API_LOAD_HEALTH_CATEGORY_NEWS_SUCCESS,
    API_LOAD_SCIENCE_CATEGORY_NEWS,
    API_LOAD_SCIENCE_CATEGORY_NEWS_ERROR,
    API_LOAD_SCIENCE_CATEGORY_NEWS_SUCCESS,
    API_LOAD_SPORT_CATEGORY_NEWS_SUCCESS,
    API_LOAD_SPORT_CATEGORY_NEWS,
    API_LOAD_SPORT_CATEGORY_NEWS_ERROR,
    API_LOAD_TECHNOLOGY_CATEGORY_NEWS,
    API_LOAD_TECHNOLOGY_CATEGORY_NEWS_SUCCESS,
    API_LOAD_TECHNOLOGY_CATEGORY_NEWS_ERROR
} from '../../../scenes/category/duck/types';
import { BASE_URL } from '../config';
import { authHeaders, methodType } from '../commonApi';


const CategoryMiddleware = ({dispatch}) => next => async action => {
    const {type = ''} = action
    switch (type) {
        case API_LOAD_ENTERTAINMENT_CATEGORY_NEWS:
            try {
                const {country} = action.payload

                const response = await fetch(`${BASE_URL}top-headlines?country=${country}&category=Entertainment`,
                    {
                        method: methodType.get,
                        headers: authHeaders()
                    }
                )

                const responseJson = await response.json()
                const {articles} = responseJson

                const entertainmentCategory = articles

                if (entertainmentCategory) {
                    dispatch({
                        type: API_LOAD_ENTERTAINMENT_CATEGORY_NEWS_SUCCESS,
                        payload: {entertainmentCategory}
                    })
                }


            } catch (error) {
                dispatch({
                    type: API_LOAD_ENTERTAINMENT_CATEGORY_NEWS_ERROR,
                    payload: {error}
                })
            }
            break
        case API_LOAD_GENERAL_CATEGORY_NEWS:
            try {
                const {country} = action.payload
                const response = await fetch(`${BASE_URL}top-headlines?country=${country}&category=General`,
                    {
                        method: methodType.get,
                        headers: authHeaders()
                    }
                )

                const responseJson = await response.json()
                const {articles} = responseJson

                const generalCategory = articles

                if (generalCategory) {
                    dispatch({
                        type: API_LOAD_GENERAL_CATEGORY_NEWS_SUCCESS,
                        payload: {generalCategory}
                    })
                }


            } catch (error) {
                dispatch({
                    type: API_LOAD_GENERAL_CATEGORY_NEWS_ERROR,
                    payload: {error}
                })
            }
            break
        case API_LOAD_HEALTH_CATEGORY_NEWS:
            try {
                const {country} = action.payload
                const response = await fetch(`${BASE_URL}top-headlines?country=${country}&category=Health`,
                    {
                        method: methodType.get,
                        headers: authHeaders()
                    }
                )

                const responseJson = await response.json()
                const {articles} = responseJson

                const healthCategory = articles

                if (healthCategory) {
                    dispatch({
                        type: API_LOAD_HEALTH_CATEGORY_NEWS_SUCCESS,
                        payload: {healthCategory}
                    })
                }


            } catch (error) {
                dispatch({
                    type: API_LOAD_HEALTH_CATEGORY_NEWS_ERROR,
                    payload: {error}
                })
            }
            break
        case API_LOAD_SCIENCE_CATEGORY_NEWS:
            try {
                const {country} = action.payload
                const response = await fetch(`${BASE_URL}top-headlines?country=${country}&category=Science`,
                    {
                        method: methodType.get,
                        headers: authHeaders()
                    }
                )

                const responseJson = await response.json()
                const {articles} = responseJson

                const scienceCategory = articles

                if (scienceCategory) {
                    dispatch({
                        type: API_LOAD_SCIENCE_CATEGORY_NEWS_SUCCESS,
                        payload: {scienceCategory}
                    })
                }


            } catch (error) {
                dispatch({
                    type: API_LOAD_SCIENCE_CATEGORY_NEWS_ERROR,
                    payload: {error}
                })
            }
            break
        case API_LOAD_SPORT_CATEGORY_NEWS:
            try {
                const {country} = action.payload
                const response = await fetch(`${BASE_URL}top-headlines?country=${country}&category=Sports`,
                    {
                        method: methodType.get,
                        headers: authHeaders()
                    }
                )

                const responseJson = await response.json()
                const {articles} = responseJson

                const sportCategory = articles

                if (sportCategory) {
                    dispatch({
                        type: API_LOAD_SPORT_CATEGORY_NEWS_SUCCESS,
                        payload: {sportCategory}
                    })
                }


            } catch (error) {
                dispatch({
                    type: API_LOAD_SPORT_CATEGORY_NEWS_ERROR,
                    payload: {error}
                })
            }
            break
        case API_LOAD_TECHNOLOGY_CATEGORY_NEWS:
            try {
                const {country} = action.payload
                const response = await fetch(`${BASE_URL}top-headlines?country=${country}&category=Technology`,
                    {
                        method: methodType.get,
                        headers: authHeaders()
                    }
                )

                const responseJson = await response.json()
                const {articles} = responseJson

                const technologyCategory = articles

                if (technologyCategory) {
                    dispatch({
                        type: API_LOAD_TECHNOLOGY_CATEGORY_NEWS_SUCCESS,
                        payload: {technologyCategory}
                    })
                }


            } catch (error) {
                dispatch({
                    type: API_LOAD_TECHNOLOGY_CATEGORY_NEWS_ERROR,
                    payload: {error}
                })
            }
            break
        default:
            break
    }
    next(action)
}


export default CategoryMiddleware