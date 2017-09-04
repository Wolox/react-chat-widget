import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';

import behavior from './reducers/behaviorReducer';
import messagesReducer from './reducers/messagesReducer';

const reducer = combineReducers({ behavior, messagesReducer });
const middleware = applyMiddleware(createLogger());

export default createStore(reducer, middleware);
