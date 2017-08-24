const TOGGLE_CHAT = 'TOGGLE_CHAT';

export default function reducer(state = {
  showChat: false
}, action) {
  switch (action.type) {
    case TOGGLE_CHAT: {
      return { ...state, showChat: true };
    }
    default:
      return state;
  }
}
