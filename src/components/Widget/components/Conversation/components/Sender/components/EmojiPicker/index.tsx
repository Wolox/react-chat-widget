import React, { useState, useEffect } from 'react';
import { Picker } from 'emoji-mart';

import { AnyFunction } from '../../../../../../../../utils/types';

const emoji = require('../../../../../../../../../assets/icon-smiley.svg') as string;

import './style.scss';

type Props = {
  onSelectEmoji: AnyFunction
}

function EmojiPicker({ onSelectEmoji } : Props) {
  const [pickerStatus, setPickerState] = useState(false)
  const togglePicker = () => {
    setPickerState(prevPickerStatus => !prevPickerStatus)
  }

  useEffect(() => {
    function onKeyup(e) {
      if (e.key === "Escape" && !pickerStatus) togglePicker()
    }
    window.addEventListener('keyup', onKeyup);
    return () => window.removeEventListener('keyup', onKeyup);
  }, [])


  return (
    <>
      {pickerStatus && (
        <Picker 
          emoji='point_up'
          title='Pick your emoji…'
          style={{ position: 'absolute', bottom: '100px', left: '0', width: '100%' }}
          onSelect={onSelectEmoji}
        />
      )}
      <button className='rcw-picker-btn' type="submit" onClick={togglePicker}>
        <img src={emoji} className="rcw-picker-icon" alt="" />
      </button>
    </>
  )
}

export default EmojiPicker;
