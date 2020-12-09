import React from 'react';
import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import rootReducer from './src/reducers'
import AppNavigator from './navigation/AppNavigator';
import middlewares from './src/services/api/middlewares'

class App extends React.Component {
    constructor(props) {
        super(props)

        const enhancer = composeWithDevTools(applyMiddleware(thunk, ...middlewares))
        this.store = createStore(rootReducer, enhancer)
    }

    render() {
        return (
            <Provider store={this.store}>
            <AppNavigator/>
            </Provider>
        )
    }
}

export default App;

