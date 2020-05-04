import { createReducer } from '../../utils/createReducer';
import { FullscreenPreviewState, ImageState  } from '../types';

import {
  OPEN_FULLSCREEN_PREVIEW,
  CLOSE_FULLSCREEN_PREVIEW,
  FullscreenPreviewActions
} from '../actions/types';

const initialState = {
  src: '',
  alt: '',
  width: 0,
  height: 0,
  visible: false
};

const fullscreenPreviewReducer = {
  [OPEN_FULLSCREEN_PREVIEW]: (state: FullscreenPreviewState, { payload }) => {
    const { src, width, height } = payload
    return { ...state, src, width, height, visible: true }
  },

  [CLOSE_FULLSCREEN_PREVIEW]: (state: FullscreenPreviewState) => ({ ...initialState }),
};

export default (state: FullscreenPreviewState = initialState, action: FullscreenPreviewActions) => createReducer(fullscreenPreviewReducer, state, action);
