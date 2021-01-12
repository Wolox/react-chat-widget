import React, { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { GlobalState } from 'src/store/types';

const send = require('../../../../../../../assets/send_button.svg') as string;

import './style.scss';

type Props = {
  placeholder: string;
  disabledInput: boolean;
  autofocus: boolean;
  textArea?: boolean;
  sendMessage: (event: any) => void;
  buttonAlt: string;
  onTextInputChange?: (event: any) => void;
}

function Sender({ sendMessage, placeholder, disabledInput, autofocus, onTextInputChange, buttonAlt, textArea }: Props) {
  const showChat = useSelector((state: GlobalState) => state.behavior.showChat);
  const inputRef = useRef(null);
  // @ts-ignore
  useEffect(() => { if (showChat) inputRef.current?.focus(); }, [showChat]);

  return (
    <form className="rcw-sender" onSubmit={sendMessage}>
      {
        !textArea 
        ? <input
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
      : <textarea 
          className="rcw-new-message"
          name="message"
          ref={inputRef}
          placeholder={placeholder}
          disabled={disabledInput}
          autoFocus={autofocus}
          autoComplete="off"
          onChange={onTextInputChange}
          >
        </textarea> 
      }
      
      <button type="submit" className="rcw-send">
        <img src={send} className="rcw-send-icon" alt={buttonAlt} />
      </button>
    </form>
  );
}

export default Sender;
