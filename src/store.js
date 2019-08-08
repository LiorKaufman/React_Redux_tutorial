import { createStore, combineReducers, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'

import siteReducer from './reducers/siteReducer';
import usersReducer from './reducers/usersReducer';

const store = createStore(
    combineReducers({
        siteReducer,
        usersReducer
    }),
    {},
    // applyMiddleware(thunk)
)

export default store;