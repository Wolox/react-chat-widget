import { createStore, combineReducers, compose } from 'redux';

import behavior from './reducers/behaviorReducer';
import messages from './reducers/messagesReducer';
import quickButtons from './reducers/quickButtonsReducer';
import preview from './reducers/fullscreenPreviewReducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =   (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const reducer = combineReducers({ behavior, messages, quickButtons, preview });

export default createStore(reducer, composeEnhancers());
