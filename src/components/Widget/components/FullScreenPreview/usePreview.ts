import { Reducer, useReducer, useState } from 'react';

type Layout = {
  width?: number;
  height?: number;
}

interface STATE {
  layout: Layout;
  zoom?: boolean;
  direction?: 'vertical' | 'horizontal';
}

interface Action {
  type: string;
  payload: STATE;
  layout: Layout;
  direction?: 'vertical' | 'horizontal';
}

const initState: STATE = {
  layout: { width: 800 },
  zoom: false,
  direction: 'vertical'
};

const usePreview = (zoomStep?: number) => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [fileSize, setFileSize] = useState({ width: 0, height: 0 });

  const reducer: Reducer<STATE, Action> = (state, action) => {
    switch (action.type) {
      case 'initLayout':
        return {
          ...state,
          layout: action.payload?.layout,
          direction: action.payload?.direction,
          zoom: false
        };
      case 'zoomIn':
        return {
          ...state,
          layout: action.layout,
          zoom: true
        };
      case 'zoomOut':
        return {
          ...state,
          layout: action.layout,
          zoom: true
        };
      case 'resetZoom':
        return { ...state, layout: action.layout, direction: action.direction };
      default:
        throw new Error('Unexpected action');
    }
  };

  const [state, dispatch] = useReducer(reducer, { ...initState });

  const initFileSize = (width: number, height: number): void => {
    const { innerWidth, innerHeight } = window;
    setWindowSize({ width: innerWidth, height: innerHeight });
    // default size
    setFileSize({ width, height });

    const payload: STATE = { layout: {}, direction: 'horizontal' };

    /**
     * Calculate the display ratio of screen to picture
     */
    if (innerWidth / innerHeight <= width / height) {

      payload.layout.width = innerWidth * 0.8
      payload.direction = 'horizontal'
    } else {
      payload.layout.height = innerHeight * 0.8
      payload.direction = 'vertical'
    }

    dispatch({
      type: 'initLayout',
      payload: payload,
      layout: {}
    });
  };

  const getLayout = (step: number): Layout => {
    let layout;
    if (state.direction === 'vertical') {
      layout = {
        height: state.layout.height || 0 + step
      }
    } else {
      layout = {
        width: state.layout.width || 0 + step
      }
    }
    return layout
  }

  const isMinSize = (): Boolean => {
    if (state.direction === 'vertical') {
      return (state.layout.height || 0) > (windowSize.height / 3);
    }
    return (state.layout.width || 0) > windowSize.width / 3;
  }

  const onZoomIn = (): void => {
    dispatch({
      type: 'zoomIn',
      layout: getLayout(zoomStep || 10),
      payload: { layout: {} }
    });
  };


  const onZoomOut = (): void => {
    if (isMinSize()) {
      dispatch({
        type: 'zoomOut',
        layout: getLayout((zoomStep || 10) * -1),
        payload: { layout: {} }
      });
    }
  };

  const onResizePageZoom = (): void => {
    if (state.zoom) {
      initFileSize(fileSize.width, fileSize.height)
    }
  };

  return {
    state,
    initFileSize,
    onZoomIn,
    onZoomOut,
    onResizePageZoom
  };
};

export default usePreview;
