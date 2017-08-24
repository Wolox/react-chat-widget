import { combineReducers } from 'redux';

import chatBehavior from './chatBehaviorReducer';
import messages from './messagesReducer';

export default combineReducers({
  chatBehavior,
  messages
});
