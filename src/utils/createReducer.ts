export const createReducer = <S>(
  reducer: { [key: string]: Function },
  state: S,
  action: { [key: string]: any }
) => (reducer[action.type] ? reducer[action.type](state, action) : state);
