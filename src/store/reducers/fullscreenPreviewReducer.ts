import { createReducer } from '../../utils/createReducer';
import {
  CLOSE_FULLSCREEN_PREVIEW,
  FullscreenPreviewActions, OPEN_FULLSCREEN_PREVIEW
} from '../actions/types';
import { FullscreenPreviewState } from '../types';


interface StateProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  visible: boolean;
}

const initialState: StateProps = {
  src: '',
  alt: '',
  width: 0,
  height: 0,
  visible: false
};

const fullscreenPreviewReducer = {
  [OPEN_FULLSCREEN_PREVIEW]: (state: FullscreenPreviewState, props: StateProps) => {
    const { src, width, height } = props;
    return { ...state, src, width, height, visible: true }
  },

  [CLOSE_FULLSCREEN_PREVIEW]: () => ({ ...initialState }),
};

export default (state: FullscreenPreviewState = initialState, action: FullscreenPreviewActions) => createReducer(fullscreenPreviewReducer, state, action);
