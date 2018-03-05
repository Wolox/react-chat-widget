import { createStore, combineReducers } from 'redux';

import behavior from './reducers/behaviorReducer';
import messages from './reducers/messagesReducer';
import quickButtons from './reducers/quickButtonsReducer';

const reducer = combineReducers({ behavior, messages, quickButtons });

/* eslint-disable no-underscore-dangle */
export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */
