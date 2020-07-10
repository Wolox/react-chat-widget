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
  inputMessage: string;
}

function Sender({ isRecording, handleStream, sendMessage, placeholder, disabledInput, autofocus, inputMessage, onTextInputChange, buttonAlt }: Props) {
  const showChat = useSelector((state: GlobalState) => state.behavior.showChat);
  const inputRef = useRef(null);
  let mic = isRecording ? micRed : micBlack;
  // @ts-ignore
  useEffect(() => { if (showChat) inputRef.current?.focus(); }, [showChat]);
  const [message, setMessage] = useState(inputMessage);
  useEffect(() => {
    mic = isRecording ? micRed : micBlack;
  }, [isRecording])

  useEffect(() => {
    setMessage(inputMessage)
  }, [inputMessage])

  const handleSubmission = e => {
    sendMessage(e)
    setMessage('')
  }

  return (
    <form className="rcw-sender" onSubmit={handleSubmission}>
      <input
        type="text"
        className="rcw-new-message"
        name="message"
        ref={inputRef}
        placeholder={placeholder}
        disabled={disabledInput}
        autoFocus={autofocus}
        autoComplete="off"
        defaultValue={message}
        onChange={e => setMessage(e.target.value)}
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
