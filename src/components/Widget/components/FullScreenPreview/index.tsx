import React, { useEffect, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import usePreview from './usePreview';
import usePortal from './usePortal';
import './styles.scss';
import { GlobalState } from '../../../../store/types';
import { closeFullscreenPreview } from '../../../../store/actions';

const close = require('../../../../../assets/close.svg') as string;
const plus = require('../../../../../assets/plus.svg') as string;
const minus = require('../../../../../assets/minus.svg') as string;
const zoomIn = require('../../../../../assets/zoom-in.svg') as string;
const zoomOut = require('../../../../../assets/zoom-out.svg') as string;

export default function PdfFullScreen() {
  const {
    state,
    initFileSize,
    onZoomIn,
    onZoomOut,
    onResizePageZoom
  } = usePreview();

  const dispatch = useDispatch();
  const { src, width, height, visible } = useSelector((state: GlobalState) => ({
    src: state.preview.src,
    width: state.preview.width,
    height: state.preview.height,
    visible: state.preview.visible
  }));

  useEffect(() => {
    if(src) {
      initFileSize(width, height);
    }
  }, [src])

  const pDom = usePortal()

  const onClosePreview = () => {
    dispatch(closeFullscreenPreview())
  }

  const childNode: ReactNode = (
    <div className="fullscreen-container">
        <div className="fullscreen-container__shadow">
          <img {...state.layout} src={src} className="fullscreen-container__image" />
        </div>
        <button
          className="fullscreen-container__button fullscreen-container__button--close"
          onClick={onClosePreview}
        >
          <img src={close} className="fullscreen-container__icon" />
        </button>
        <div className="fullscreen-container__tool-container">
          <button
            className="fullscreen-container__button"
            onClick={onResizePageZoom}
          >
            <img src={state.zoom ? zoomOut : zoomIn} className="fullscreen-container__icon" />
          </button>

          <button
            className="fullscreen-container__button"
            onClick={onZoomIn}
          >
            <img src={plus} className="fullscreen-container__icon" />
          </button>
          <button
            className="fullscreen-container__button"
            onClick={onZoomOut}
          >
            <img src={minus} className="fullscreen-container__icon" />
          </button>
        </div>
      </div>
  )

  if(visible) {
    return (
      ReactDOM.createPortal(childNode, pDom)
    );
  }
  return null
}
