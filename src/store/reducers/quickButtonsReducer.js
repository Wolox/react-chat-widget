import { List } from 'immutable';
import { createReducer } from '@utils/store';
import { createQuickButton } from '../../utils/messages';
import * as actionTypes from '../actions/actionTypes';

const initialState = List([]);

const quickButtonsReducer = {
  [actionTypes.SET_QUICK_BUTTONS]: ( state, action ) => 
    List(action.buttons.map(button => createQuickButton(button)))
}

export default (state = initialState, action) => createReducer(quickButtonsReducer, state, action);
