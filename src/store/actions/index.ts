import { ElementType } from 'react';

import * as actionsTypes from './types';
import { LinkParams } from '../types';

export function toggleChat(): actionsTypes.BehaviorActions {
  return {
    type: actionsTypes.TOGGLE_CHAT
  };
}

export function toggleInputDisabled(): actionsTypes.BehaviorActions {
  return {
    type: actionsTypes.TOGGLE_INPUT_DISABLED
  };
}

export function addUserMessage(text: string): actionsTypes.MessagesActions {
  return {
    type: actionsTypes.ADD_NEW_USER_MESSAGE,
    text
  };
}

export function addResponseMessage(text: string): actionsTypes.MessagesActions {
  return {
    type: actionsTypes.ADD_NEW_RESPONSE_MESSAGE,
    text
  };
}

export function toggleMsgLoader(): actionsTypes.BehaviorActions {
  return {
    type: actionsTypes.TOGGLE_MESSAGE_LOADER
  }
}

export function addLinkSnippet(link: LinkParams): actionsTypes.MessagesActions {
  return {
    type: actionsTypes.ADD_NEW_LINK_SNIPPET,
    link
  };
}

export function renderCustomComponent(
  component: ElementType,
  props: any,
  showAvatar: boolean
): actionsTypes.MessagesActions {
  return {
    type: actionsTypes.ADD_COMPONENT_MESSAGE,
    component,
    props,
    showAvatar
  };
}

export function dropMessages(): actionsTypes.MessagesActions {
  return {
    type: actionsTypes.DROP_MESSAGES
  };
}

export function hideAvatar(index: number): actionsTypes.MessagesActions {
  return {
    type: actionsTypes.HIDE_AVATAR,
    index
  };
}

export function setQuickButtons(buttons: Array<{ label: string, value: string | number }>): actionsTypes.QuickButtonsActions {
  return {
    type: actionsTypes.SET_QUICK_BUTTONS,
    buttons
  }
}

export function deleteMessages(count: number, id?: string): actionsTypes.MessagesActions {
  return {
    type: actionsTypes.DELETE_MESSAGES,
    count,
    id
  }
}

export function setBadgeCount(count: number): actionsTypes.SetBadgeCount {
  return {
    type: actionsTypes.SET_BADGE_COUNT,
    count
  }
}

export function markAllMessagesRead(): actionsTypes.MarkAllMessagesRead {
  return {
    type: actionsTypes.MARK_ALL_READ
  }
}
