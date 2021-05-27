import { useEffect, ReactNode } from 'react';
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

type Props = {
  fullScreenMode?: boolean;
  zoomStep?: number
}

export default function FullScreenPreview({ fullScreenMode, zoomStep }:Props) {
  const {
    state,
    initFileSize,
    onZoomIn,
    onZoomOut,
    onResizePageZoom
  } = usePreview(zoomStep);

  const dispatch = useDispatch();
  const { src, alt, width, height, visible } = useSelector((state: GlobalState) => ({
    src: state.preview.src,
    alt: state.preview.alt,
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
    <div className="rcw-previewer-container">
        <div className="rcw-previewer-veil">
          <img {...state.layout} src={src} className="rcw-previewer-image" alt={alt} />
        </div>
        <button
          className="rcw-previewer-button rcw-previewer-close-button"
          onClick={onClosePreview}
        >
          <img src={close} className="rcw-previewer-icon" />
        </button>
        <div className="rcw-previewer-tools">
          <button
            className="rcw-previewer-button"
            onClick={onResizePageZoom}
          >
            <img
              src={state.zoom ? zoomOut : zoomIn}
              className="rcw-previewer-icon"
              alt="reset zoom"
            />
          </button>

          <button
            className="rcw-previewer-button"
            onClick={onZoomIn}
          >
            <img src={plus} className="rcw-previewer-icon" alt="zoom in"/>
          </button>
          <button
            className="rcw-previewer-button"
            onClick={onZoomOut}
          >
            <img src={minus} className="rcw-previewer-icon" alt="zoom out"/>
          </button>
        </div>
      </div>
  )

  return visible ? ReactDOM.createPortal(childNode, pDom) : null;
}
