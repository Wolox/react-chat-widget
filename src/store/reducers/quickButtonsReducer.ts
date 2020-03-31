import { createReducer } from '../../utils/createReducer';
import { createQuickButton } from '../../utils/messages';
import { SET_QUICK_BUTTONS, QuickButtonsActions } from '../actions/types';
import { QuickButtonsState, QuickButton } from '../types'

const initialState = {
  quickButtons: []
};

const quickButtonsReducer = {
  [SET_QUICK_BUTTONS]: (_: QuickButtonsState, action: { buttons: Array<QuickButton>}) =>
    action.buttons.map(button => createQuickButton(button))
}

export default (state = initialState, action: QuickButtonsActions) => createReducer(quickButtonsReducer, state, action);
