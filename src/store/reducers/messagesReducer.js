import { List, Map } from 'immutable';

const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
const initialState = List([]);

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_MESSAGE: {
      return state.push(Map(action.payload));
    }
    default:
      return state;
  }
}
