import React from 'react';
import { MessageOrigin } from '../../constants';
import { createReducer } from '../../utils/createReducer';
import { createComponentMessage, createLinkSnippet, createNewMessage } from '../../utils/messages';
import {
  ADD_COMPONENT_MESSAGE, ADD_NEW_LINK_SNIPPET, ADD_NEW_RESPONSE_MESSAGE, ADD_NEW_USER_MESSAGE, DELETE_MESSAGES, DROP_MESSAGES,
  HIDE_AVATAR, MARK_ALL_READ, MessagesActions, SET_BADGE_COUNT
} from '../actions/types';
import { LinkParams, MessagesState } from '../types';


const initialState = {
  messages: [],
  badgeCount: 0
};

interface AddNewUserMessageProps {
  text: string;
  showClientAvatar: boolean;
  id: string;
}

interface AddNewResponseMessageProps {
  text: string;
  id: string;
}

interface AddNewLinkSnippetProps {
  id: string;
  link: LinkParams;
}

interface AddComponentMessageProps {
  component: React.ElementType;
  props: string;
  showAvatar: boolean;
  id: string;
}

interface HideAvatarProps {
  index: number;
}

interface DeleteMessagesProps {
  count: number;
  id: string;
}

interface SetBadgeCountProps {
  count: number;
}

const messagesReducer = {
  [ADD_NEW_USER_MESSAGE]: (state: MessagesState, props: AddNewUserMessageProps) =>
    ({ ...state, messages: [...state.messages, createNewMessage(props.text, MessageOrigin.client, props.id)] }),

  [ADD_NEW_RESPONSE_MESSAGE]: (state: MessagesState, props: AddNewResponseMessageProps) =>
    ({ ...state, messages: [...state.messages, createNewMessage(props.text, MessageOrigin.response, props.id)], badgeCount: state.badgeCount + 1 }),

  [ADD_NEW_LINK_SNIPPET]: (state: MessagesState, props: AddNewLinkSnippetProps) =>
    ({ ...state, messages: [...state.messages, createLinkSnippet(props.link, props.id)] }),

  [ADD_COMPONENT_MESSAGE]: (state: MessagesState, props: AddComponentMessageProps) =>
    ({ ...state, messages: [...state.messages, createComponentMessage(props.component, props.props, props.showAvatar, props.id)] }),

  [DROP_MESSAGES]: (state: MessagesState) => ({ ...state, messages: [] }),

  [HIDE_AVATAR]: (state: MessagesState, props: HideAvatarProps) => state.messages[props.index].showAvatar = false,

  [DELETE_MESSAGES]: (state: MessagesState, props: DeleteMessagesProps) =>
  ({
    ...state,
    messages: props.id
      ? state.messages.filter((_, index) => {
        const targetMsg = state.messages.findIndex(tMsg => tMsg.customId === props.id)
        return index < targetMsg - props.count + 1 || index > targetMsg
      })
      : state.messages.slice(0, state.messages.length - props.count)
  }),

  [SET_BADGE_COUNT]: (state: MessagesState, props: SetBadgeCountProps) => ({ ...state, badgeCount: props.count }),

  [MARK_ALL_READ]: (state: MessagesState) =>
    ({ ...state, messages: state.messages.map(message => ({ ...message, unread: false })), badgeCount: 0 })
}

export default (state = initialState, action: MessagesActions) => createReducer(messagesReducer, state, action);
