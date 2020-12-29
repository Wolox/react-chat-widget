import React, { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GlobalState } from 'src/store/types';
import Counter from '../Counter';
import { setMsgLength } from '../../../../../../store/actions';

const send = require('../../../../../../../assets/send_button.svg') as string;

import './style.scss';

type Props = {
  placeholder: string;
  disabledInput: boolean;
  autofocus: boolean;
  sendMessage: (event: any) => void;
  buttonAlt: string;
  onTextInputChange?: (event: any) => void;
}

function Sender({ sendMessage, placeholder, disabledInput, autofocus, onTextInputChange, buttonAlt }: Props) {
  const showChat = useSelector((state: GlobalState) => state.behavior.showChat);  
  const showcount = useSelector((state: GlobalState) => state.behavior.showCounter);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  // @ts-ignore
  useEffect(() => { if (showChat) inputRef.current?.focus(); }, [showChat]);

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
        onChange={(e) => { dispatch(setMsgLength(e.target.value.length)); if(onTextInputChange) onTextInputChange(e);}}
      />
      {
        showcount && inputRef.current &&
          <Counter />
      }      
      <button type="submit" className="rcw-send">
        <img src={send} className="rcw-send-icon" alt={buttonAlt} />
      </button>
    </form>
  );
}

export default Sender;
