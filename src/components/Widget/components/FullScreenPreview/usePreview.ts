import { useState, useEffect, useReducer } from 'react';

type Layout = {
  width?: number;
  height?: number;
}

interface STATE {
  layout: Layout;
  zoom: boolean
  direction: 'vertical' | 'horizontal'
}

const STEP: number = 80;

const initState: STATE = {
  layout: { width: 800 },
  zoom: false,
  direction: 'vertical'
};

const usePreview = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [fileSize, setFileSize] = useState({ width: 0, height: 0 });

  const reducer = (state, action) => {
    switch (action.type) {
      case 'initLayout':
        return { ...state, layout: action.layout, direction: action.direction, zoom: false };
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

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setWindowSize({ width: innerWidth, height: innerHeight });
  }, []);

  const initFileSize = (width: number, height: number) => {
    // default size
    setFileSize({ width, height });
    // window size and img size rate
    if(width < height) {
      // vertical
      dispatch({
        type: 'initLayout',
        layout: {
          height: windowSize.height * 0.8
        },
        direction: 'vertical',
      });
    } else {
      // horizontal
      dispatch({
        type: 'initLayout',
        layout: {
          width: windowSize.width * 0.8,
        },
        direction: 'horizontal',
      });
    }
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

  const onZoomIn = () => {
    dispatch({
      type: 'zoomIn',
      layout: getLayout(STEP)
    });
  };


  const onZoomOut = () => {
    if (isMinSize()) {
      dispatch({
        type: 'zoomOut',
        layout: getLayout(-STEP)
      });
    }
  };

  const onResizePageZoom = () => {
    if (state.zoom) {
      // full height
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
