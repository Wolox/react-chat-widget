import { Map } from 'immutable';

import { createReducer } from '@utils/store';

import * as actionTypes from '../actions/actionTypes';

const initialState = Map({ showChat: false, disabledInput: false, msgLoader: false });

const behaviorReducer = {
  [actionTypes.TOGGLE_CHAT]: state =>
    state.update('showChat', showChat => !showChat),

  [actionTypes.TOGGLE_INPUT_DISABLED]: state =>
    state.update('disabledInput', disabledInput => !disabledInput),

  [actionTypes.TOGGLE_MSG_LOADER]: state =>
    state.update('msgLoader', msgLoader => !msgLoader)
};

export default (state = initialState, action) => createReducer(behaviorReducer, state, action);
