import { createReducer } from '../../utils/createReducer';
import { BehaviorState } from '../types';

import {
  BehaviorActions,
  TOGGLE_CHAT,
  TOGGLE_INPUT_DISABLED,
  TOGGLE_MESSAGE_LOADER,
  SET_MIN_LENGTH,
  SET_MAX_LENGTH,
  SHOW_COUNTER,
  SET_COUNTER_STYLE,
  SET_MSG_LENGTH
} from '../actions/types';

const initialState = {
  showChat: false,
  disabledInput: false,
  messageLoader: false,
  minLength: 0,
  maxLength: 100000,
  showCounter: false,
  counterStyle: 'counter',
  msgLength: 0
};

const behaviorReducer = {
  [TOGGLE_CHAT]: (state: BehaviorState) => ({ ...state, showChat: !state.showChat}),

  [TOGGLE_INPUT_DISABLED]: (state: BehaviorState) => ({ ...state, disabledInput: !state.disabledInput }),

  [TOGGLE_MESSAGE_LOADER]: (state: BehaviorState) => ({ ...state, messageLoader: !state.messageLoader }),

  [SET_MIN_LENGTH]: (state: BehaviorState, { count }) => ({ ...state, minLength: count }),
  [SET_MAX_LENGTH]: (state: BehaviorState, { count }) => ({ ...state, maxLength: count }),
  [SHOW_COUNTER]: (state: BehaviorState, { boo }) => ({ ...state, showCounter: boo }),
  [SET_COUNTER_STYLE]: (state: BehaviorState, { style }) => ({ ...state, counterStyle: style }),  
  [SET_MSG_LENGTH]: (state: BehaviorState, { count }) => ({ ...state, msgLength: count })
};

export default (state: BehaviorState = initialState, action: BehaviorActions) => createReducer(behaviorReducer, state, action);
