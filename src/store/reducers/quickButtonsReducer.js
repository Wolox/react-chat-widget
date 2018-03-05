import { List } from 'immutable';
import { createQuickButton } from './helper';
import * as actionTypes from '../actions/actionTypes';

const initialState = List([]);

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case actionTypes.SET_QUICK_BUTTONS:
      return List(action.buttons.map(button => createQuickButton(button)));
    default:
      return state;
  }
}