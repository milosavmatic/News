import {
    API_LOAD_CATEGORY_NEWS,
    API_LOAD_CATEGORY_NEWS_ERROR,
    API_LOAD_CATEGORY_NEWS_SUCCESS
} from '../../../scenes/category/duck/types';
import { BASE_URL } from '../config';
import { authHeaders, methodType } from '../commonApi';


const CategoryMiddleware = ({dispatch}) => next => async action => {
    const {type = ''} = action
    switch (type) {
        case API_LOAD_CATEGORY_NEWS:
            try {
                const {country, category} = action.payload
                console.log("mid" + category)
                const response = await fetch(`${BASE_URL}top-headlines?country=${country}&category=${category}`,
                    {
                        method: methodType.get,
                        headers: authHeaders()
                    }
                )

                const responseJson = await response.json()
                const { articles } = responseJson

                const articlesCategory = articles

                if(articlesCategory) {
                    dispatch({
                        type: API_LOAD_CATEGORY_NEWS_SUCCESS,
                        payload: {articlesCategory}
                    })
                }


            } catch (error) {
                dispatch({
                    type: API_LOAD_CATEGORY_NEWS_ERROR,
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