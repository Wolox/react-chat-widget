import { List } from 'immutable';
import { MESSAGE_SENDER } from 'constants';

import {
  createNewMessage,
  createLinkSnippet,
  createComponentMessage
} from './helper';
import * as actionTypes from '../actions/actionTypes';

const initialState = List([]);

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_NEW_USER_MESSAGE: {
      return state.push(createNewMessage(action.text, MESSAGE_SENDER.CLIENT));
    }
    case actionTypes.ADD_NEW_RESPONSE_MESSAGE: {
      return state.push(createNewMessage(action.text, MESSAGE_SENDER.RESPONSE));
    }
    case actionTypes.ADD_NEW_LINK_SNIPPET: {
      return state.push(createLinkSnippet(action.link, MESSAGE_SENDER.RESPONSE));
    }
    case actionTypes.ADD_COMPONENT_MESSAGE: {
      return state.push(createComponentMessage(action.component, action.props, action.showAvatar));
    }
    case actionTypes.DROP_MESSAGES: {
      return List([]);
    }
    default:
      return state;
  }
}
