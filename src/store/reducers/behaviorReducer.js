import { Map } from 'immutable';
import * as actionTypes from '../actions/actionTypes';

const initialState = Map({ showChat: false, disabledInput: false });

const behaviorReducer = {
  [actionTypes.TOGGLE_CHAT]: state =>
    state.update('showChat', showChat => !showChat),

  [actionTypes.TOGGLE_INPUT_DISABLED]: state =>
    state.update('disabledInput', disabledInput => !disabledInput)
};

export default (state = initialState, action) => createReducer(behaviorReducer, state, action);
