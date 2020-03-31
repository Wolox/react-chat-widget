import { ElementType } from 'react';

import { Link, QuickButton } from '../types';

export const TOGGLE_CHAT = 'BEHAVIOR/TOGGLE_CHAT';
export const TOGGLE_INPUT_DISABLED = 'BEHAVIOR/TOGGLE_INPUT_DISABLED';
export const TOGGLE_MSG_LOADER = 'BEHAVIOR/TOGGLE_MSG_LOADER';
export const ADD_NEW_USER_MESSAGE = 'MESSAGES/ADD_NEW_USER_MESSAGE';
export const ADD_NEW_RESPONSE_MESSAGE = 'MESSAGES/ADD_NEW_RESPONSE_MESSAGE';
export const ADD_NEW_LINK_SNIPPET = 'MESSAGES/ADD_NEW_LINK_SNIPPET';
export const ADD_COMPONENT_MESSAGE = 'MESSAGES/ADD_COMPONENT_MESSAGE';
export const DROP_MESSAGES = 'MESSAGES/DROP_MESSAGES';
export const HIDE_AVATAR = 'MESSAGES/HIDE_AVATAR';
export const SET_QUICK_BUTTONS = 'SET_QUICK_BUTTONS';

export interface ToggleChat {
  type: typeof TOGGLE_CHAT;
}

export interface ToggleInputDisabled {
  type: typeof TOGGLE_INPUT_DISABLED;
}

export interface AddUserMessage {
  type: typeof ADD_NEW_USER_MESSAGE;
  text: string;
}

export interface AddResponseMessage {
  type: typeof ADD_NEW_RESPONSE_MESSAGE,
  text: string
}

export interface ToggleMsgLoader {
  type: typeof TOGGLE_MSG_LOADER
}

export interface AddLinkSnippet {
  type: typeof ADD_NEW_LINK_SNIPPET,
  link: Link
}

export interface RenderCustomComponent {
  type: typeof ADD_COMPONENT_MESSAGE,
  component: ElementType,
  props: any,
  showAvatar: boolean
}

export interface DropMessages {
  type: typeof DROP_MESSAGES
}

export interface HideAvatar {
  type: typeof HIDE_AVATAR
}

export interface SetQuickButtons {
  type: typeof SET_QUICK_BUTTONS,
  buttons: Array<QuickButton>
}

export type BehaviorActions = ToggleChat | ToggleInputDisabled | ToggleMsgLoader;

export type MessagesActions = AddUserMessage | AddResponseMessage | AddLinkSnippet | RenderCustomComponent | DropMessages | HideAvatar;

export type QuickButtonsActions = SetQuickButtons;
