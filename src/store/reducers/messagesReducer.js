import { List, Map } from 'immutable';
import { MESSAGE_SENDER } from 'constants';

import { createNewMessage, createLinkSnippet } from './helper';
import * as actionTypes from '../actions/actionTypes';

const initialState = Map({ messages: List([]) });

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_NEW_USER_MESSAGE: {
      return state.get('messages').push(createNewMessage(action.text, MESSAGE_SENDER.CLIENT));
    }
    case actionTypes.ADD_NEW_RESPONSE_MESSAGE: {
      return state.get('messages').push(createNewMessage(action.text, MESSAGE_SENDER.RESPONSE));
    }
    case actionTypes.ADD_NEW_LINK_SNIPPET: {
      return state.get('messages').push(createLinkSnippet(action.link, MESSAGE_SENDER.RESPONSE));
    }
    default:
      return state;
  }
}
