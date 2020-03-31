import { BehaviorState, MessagesState, QuickButtonsState } from '../store/types'

export const createReducer = <S>(
  reducer: { [key: string]: Function },
  state: BehaviorState | MessagesState | QuickButtonsState,
  action: { [key: string]: any }
) => (reducer[action.type] ? reducer[action.type](state, action) : state);
