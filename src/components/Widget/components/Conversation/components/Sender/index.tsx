import React, { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { GlobalState } from 'src/store/types';

const send = require('../../../../../../../assets/send_button.svg') as string;
const micBlack = require('../../../../../../../assets/mic.svg') as string;
const micRed = require('../../../../../../../assets/mic-red.svg') as string;

import './style.scss';

type Props = {
  placeholder: string;
  disabledInput: boolean;
  autofocus: boolean;
  sendMessage: (event: any) => void;
  buttonAlt: string;
  onTextInputChange?: (event: any) => void;
  isRecording: boolean;
  handleStream: () => void;
}

function Sender({ isRecording, handleStream, sendMessage, placeholder, disabledInput, autofocus, onTextInputChange, buttonAlt }: Props) {
  const showChat = useSelector((state: GlobalState) => state.behavior.showChat);
  const inputRef = useRef(null);
  let mic = isRecording ? micRed : micBlack;
  // @ts-ignore
  useEffect(() => { if (showChat) inputRef.current?.focus(); }, [showChat]);
  debugger
  useEffect(() => {
    mic = isRecording ? micRed : micBlack;
  }, [isRecording])

  return (
    <form className="rcw-sender" onSubmit={sendMessage}>
      <input
        type="text"
        className="rcw-new-message"
        name="message"
        ref={inputRef}
        placeholder={placeholder}
        disabled={disabledInput}
        autoFocus={autofocus}
        autoComplete="off"
        onChange={onTextInputChange}
      />
      <button type="button" className="rcw-send" onClick={handleStream}>
        <img src={mic} className="rcw-send-icon" alt={buttonAlt} />
      </button>
      <button type="submit" className="rcw-send">
        <img src={send} className="rcw-send-icon" alt={buttonAlt} />
      </button>
    </form>
  );
}

export default Sender;
