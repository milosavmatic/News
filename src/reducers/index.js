import { combineReducers } from 'redux'
import NewsReducer from '../scenes/news/duck/reducer'
import CategoryReducer from '../scenes/category/duck/reducer'
import SearchReducer from '../scenes/search/duck/reducer'



export default combineReducers({
    news: NewsReducer,
    category: CategoryReducer,
    search: SearchReducer
})