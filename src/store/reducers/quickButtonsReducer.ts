import { createReducer } from '../../utils/createReducer';
import { createQuickButton } from '../../utils/messages';
import { SET_QUICK_BUTTONS, QuickButtonsActions } from '../actions/types';
import { QuickButtonsState, QuickButton } from '../types'

const initialState = {
  quickButtons: []
};

const quickButtonsReducer = {
  [SET_QUICK_BUTTONS]: (_: QuickButtonsState, { buttons }) =>
    ({ quickButtons: [...buttons.map((button: QuickButton) => createQuickButton(button))] })
}

export default (state = initialState, action: QuickButtonsActions) => createReducer(quickButtonsReducer, state, action);
