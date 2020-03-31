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
  DROP_MESSAGES
} from '../actions/types';

const initialState = {
  messages: []
};

const messagesReducer = {
  [ADD_NEW_USER_MESSAGE]: (state: MessagesState, { text }) =>
    state.messages.push(createNewMessage(text, MESSAGE_SENDER.CLIENT)),

  [ADD_NEW_RESPONSE_MESSAGE]: (state: MessagesState, { text }) =>
    state.messages.push(createNewMessage(text, MESSAGE_SENDER.RESPONSE)),

  [ADD_NEW_LINK_SNIPPET]: (state: MessagesState, { link }) =>
    state.messages.push(createLinkSnippet(link)),

  [ADD_COMPONENT_MESSAGE]: (state: MessagesState, { component, props, showAvatar }) =>
    state.messages.push(createComponentMessage(component, props, showAvatar)),

  [DROP_MESSAGES]: () => ({ messages: [] })

  // [actionTypes.HIDE_AVATAR]: (state: MessagesState, { index }) =>
  //   state.messages.update(index, message => message.set('showAvatar', false))
}

export default (state = initialState, action: MessagesActions) => createReducer(messagesReducer, state, action);
