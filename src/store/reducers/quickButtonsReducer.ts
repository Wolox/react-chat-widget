import { createReducer } from '../../utils/createReducer';
import { createQuickButton } from '../../utils/messages';
import { QuickButtonsActions, SET_QUICK_BUTTONS } from '../actions/types';
import { QuickButtonsState, QuickButtonTypes } from '../types';

const initialState = {
  quickButtons: []
};

interface SetQuickButtonsProps {
  buttons: QuickButtonTypes[];
}

const quickButtonsReducer = {
  [SET_QUICK_BUTTONS]: (_: QuickButtonsState, props: SetQuickButtonsProps) =>
    ({ quickButtons: [...props.buttons.map((button: QuickButtonTypes) => createQuickButton(button))] })
}

export default (state = initialState, action: QuickButtonsActions) => createReducer(quickButtonsReducer, state, action);
