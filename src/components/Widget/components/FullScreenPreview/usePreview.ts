import { useState, useReducer } from 'react';

type Layout = {
  width?: number;
  height?: number;
}

interface STATE {
  layout: Layout;
  zoom?: boolean
  direction: 'vertical' | 'horizontal'
}

const initState: STATE = {
  layout: { width: 800 },
  zoom: false,
  direction: 'vertical'
};

const usePreview = (zoomStep) => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [fileSize, setFileSize] = useState({ width: 0, height: 0 });

  const reducer = (state, action) => {
    switch (action.type) {
      case 'initLayout':
        return {
          ...state,
          layout: action.payload.layout,
          direction: action.payload.direction,
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

  const initFileSize = (width: number, height: number):void => {
    const { innerWidth, innerHeight } = window;
    setWindowSize({ width: innerWidth, height: innerHeight });
    // default size
    setFileSize({ width, height });
    
    const payload: STATE = { layout: {}, direction: 'horizontal' };

    /**
     * Calculate the display ratio of screen to picture
     */
    if(innerWidth / innerHeight <= width / height) {
      payload.layout.width = innerWidth * 0.8
      payload.direction = 'horizontal'
    } else {
      payload.layout.height = innerHeight * 0.8
      payload.direction = 'vertical'
    }

    dispatch({
      type: 'initLayout',
      payload
    });
  };

  const getLayout = (step: number): Layout => {
    let layout;
    if(state.direction === 'vertical') {
      layout = {
        height: state.layout.height + step
      }
    } else {
      layout = {
        width: state.layout.width + step
      }
    }
    return layout
  }

  const isMinSize = (): Boolean => {
    if(state.direction === 'vertical') {
      return state.layout.height > (windowSize.height / 3)
    }
    return state.layout.width > windowSize.width / 3
  }

  const onZoomIn = ():void => {
    dispatch({
      type: 'zoomIn',
      layout: getLayout(zoomStep)
    });
  };


  const onZoomOut = ():void => {
    if (isMinSize()) {
      dispatch({
        type: 'zoomOut',
        layout: getLayout(-zoomStep)
      });
    }
  };

  const onResizePageZoom = ():void => {
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
