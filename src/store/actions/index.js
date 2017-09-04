import * as actions from './actionTypes';

export function toggleChat() {
  return {
    type: actions.TOGGLE_CHAT
  };
}

export function addUserMessage(text) {
  return {
    type: actions.ADD_NEW_USER_MESSAGE,
    text
  };
}

export function addResponseMessage(text) {
  return {
    type: actions.ADD_NEW_RESPONSE_MESSAGE,
    text
  };
}

export function addLinkSnippet(link) {
  return {
    type: actions.ADD_NEW_LINK_SNIPPET,
    link
  };
}
