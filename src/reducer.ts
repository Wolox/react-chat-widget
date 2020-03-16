export interface GlobalState {
  messages: Array<any>; // TODO: Create Message type
  quickButtons: Array<any>; // TODO: Create Quick buttons type
  showChat: boolean;
  disabledInput: boolean;
  msgLoader: boolean;
}

export const INITIAL_STATE = {
  messages: [],
  quickButtons: [],
  showChat: false,
  disabledInput: false,
  msgLoader: false
};

enum ActionTypes {
  TOGGLE_CHAT = 'BEHAVIOR/TOGGLE_CHAT',
  TOGGLE_INPUT_DISABLED = 'BEHAVIOR/TOGGLE_INPUT_DISABLED',
  TOGGLE_MSG_LOADER = 'BEHAVIOR/TOGGLE_MSG_LOADER',
  ADD_NEW_USER_MESSAGE = 'MESSAGES/ADD_NEW_USER_MESSAGE',
  ADD_NEW_RESPONSE_MESSAGE = 'MESSAGES/ADD_NEW_RESPONSE_MESSAGE',
  ADD_NEW_LINK_SNIPPET = 'MESSAGES/ADD_NEW_LINK_SNIPPET',
  ADD_COMPONENT_MESSAGE = 'MESSAGES/ADD_COMPONENT_MESSAGE',
  DROP_MESSAGES = 'MESSAGES/DROP_MESSAGES',
  HIDE_AVATAR = 'MESSAGES/HIDE_AVATAR',
  SET_QUICK_BUTTONS = 'SET_QUICK_BUTTONS'
}

export interface ToggleChat {
  type: ActionTypes.TOGGLE_CHAT;
}

export interface ToggleInputDisabled {
  type: ActionTypes.TOGGLE_INPUT_DISABLED;
}

export type Action = ToggleChat | ToggleInputDisabled;

export const actionCreators = {
  toggleChat: () => ({ type: ActionTypes.TOGGLE_CHAT }),
  toggleInputDisabled: () => ({ type: ActionTypes.TOGGLE_INPUT_DISABLED })
};

export const globalReducer = (state: GlobalState, action: Action): GlobalState => {
  switch (action.type) {
    case 'BEHAVIOR/TOGGLE_CHAT': {
      return { ...state, showChat: !state.showChat };
    }
    default: {
      return state;
    }
  }
};
