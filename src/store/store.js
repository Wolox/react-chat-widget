import { createStore, combineReducers } from 'redux';

import behavior from './reducers/behaviorReducer';
import messages from './reducers/messagesReducer';
import quickButtons from './reducers/quickButtonsReducer';

const reducer = combineReducers({ behavior, messages, quickButtons });

export default createStore(
  reducer,
  process.env.NODE_ENV !== 'production' ?
    /* eslint-disable no-underscore-dangle */
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__() : ''
    /* eslint-enable */
);
