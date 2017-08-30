import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';

import chatBehavior from './reducers/chatBehaviorReducer';
import messages from './reducers/messagesReducer';

const reducer = combineReducers({
  chatBehavior,
  messages
});

const middleware = applyMiddleware(createLogger());

export default createStore(reducer, middleware);
