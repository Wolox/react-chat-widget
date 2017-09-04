import { List, Map } from 'immutable';
import { MESSAGE_SENDER } from 'constants';

import { createNewMessage } from './helper';
import { ADD_NEW_USER_MESSAGE, ADD_NEW_RESPONSE_MESSAGE } from '../actions/actionTypes.js';

const initialState = Map({ messages: List([]) });

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_USER_MESSAGE: {
      return state.get('messages').push(createNewMessage(action.payload, MESSAGE_SENDER.CLIENT));
    }
    case ADD_NEW_RESPONSE_MESSAGE: {
      return state.get('messages').push(createNewMessage(action.payload, MESSAGE_SENDER.RESPONSE));
    }
    default:
      return state;
  }
}
