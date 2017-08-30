import { Map } from 'immutable';

const TOGGLE_CHAT = 'TOGGLE_CHAT';
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
