import { MessagesState } from '../types';

import { createReducer } from '../../utils/createReducer';
import { createNewMessage, createLinkSnippet, createComponentMessage } from '../../utils/messages';
import { MESSAGE_SENDER } from '../../constants';
import {
  MessagesActions,
  ADD_NEW_USER_MESSAGE,
  ADD_NEW_RESPONSE_MESSAGE,
  ADD_NEW_LINK_SNIPPET,
  ADD_COMPONENT_MESSAGE,
  DROP_MESSAGES,
  HIDE_AVATAR
} from '../actions/types';

const initialState = {
  messages: []
};

const messagesReducer = {
  [ADD_NEW_USER_MESSAGE]: (state: MessagesState, { text }) =>
    ({ messages: [...state.messages, createNewMessage(text, MESSAGE_SENDER.CLIENT)] }),

  [ADD_NEW_RESPONSE_MESSAGE]: (state: MessagesState, { text }) =>
    ({ messages: [...state.messages, createNewMessage(text, MESSAGE_SENDER.RESPONSE)] }),

  [ADD_NEW_LINK_SNIPPET]: (state: MessagesState, { link }) =>
    ({ messages: [...state.messages, createLinkSnippet(link)] }),

  [ADD_COMPONENT_MESSAGE]: (state: MessagesState, { component, props, showAvatar }) =>
    ({ messages: [...state.messages, createComponentMessage(component, props, showAvatar)] }),

  [DROP_MESSAGES]: () => ({ messages: [] }),

  [HIDE_AVATAR]: (state: MessagesState, { index }) =>
    state.messages[index].showAvatar = false
}

export default (state = initialState, action: MessagesActions) => createReducer(messagesReducer, state, action);
