import { Map } from 'immutable';
import { TOGGLE_CHAT } from '../actions/actionTypes';

const initialState = Map({ showChat: false });

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_CHAT: {
      return state.update('showChat', showChat => !showChat);
    }
    default:
      return state;
  }
}
