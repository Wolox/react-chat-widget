import { List, Map } from 'immutable';
import { ADD_NEW_USER_MESSAGE } from 'constants';

const initialState = Map({ messages: List([]) });

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_USER_MESSAGE: {
      return state.get('messages').push(Map(action.payload));
    }
    default:
      return state;
  }
}
