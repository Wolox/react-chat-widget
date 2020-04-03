import { ElementType } from 'react';

import * as actions from './types';
import { Link, QuickButton } from '../types';

export function toggleChat(): actions.BehaviorActions {
  return {
    type: actions.TOGGLE_CHAT
  };
}

export function toggleInputDisabled(): actions.BehaviorActions {
  return {
    type: actions.TOGGLE_INPUT_DISABLED
  };
}

export function addUserMessage(text: string): actions.MessagesActions {
  return {
    type: actions.ADD_NEW_USER_MESSAGE,
    text
  };
}

export function addResponseMessage(text: string): actions.MessagesActions {
  return {
    type: actions.ADD_NEW_RESPONSE_MESSAGE,
    text
  };
}

export function toggleMsgLoader(): actions.BehaviorActions {
  return {
    type: actions.TOGGLE_MESSAGE_LOADER
  }
}

export function addLinkSnippet(link: Link): actions.MessagesActions {
  return {
    type: actions.ADD_NEW_LINK_SNIPPET,
    link
  };
}

export function renderCustomComponent(
  component: ElementType,
  props: any,
  showAvatar: boolean
): actions.MessagesActions {
  return {
    type: actions.ADD_COMPONENT_MESSAGE,
    component,
    props,
    showAvatar
  };
}

export function dropMessages(): actions.MessagesActions {
  return {
    type: actions.DROP_MESSAGES
  };
}

export function hideAvatar(index: number): actions.MessagesActions {
  return {
    type: actions.HIDE_AVATAR,
    index
  };
}

export function setQuickButtons(buttons: Array<QuickButton>): actions.QuickButtonsActions {
  return {
    type: actions.SET_QUICK_BUTTONS,
    buttons
  }
}
