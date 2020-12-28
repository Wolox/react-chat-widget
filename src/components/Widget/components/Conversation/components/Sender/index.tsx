import React, { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { GlobalState } from 'src/store/types';
import Counter from '../Counter';

const send = require('../../../../../../../assets/send_button.svg') as string;

import './style.scss';

type Props = {
  placeholder: string;
  disabledInput: boolean;
  autofocus: boolean;
  sendMessage: (event: any) => void;
  buttonAlt: string;
  onTextInputChange?: (event: any) => void;
  minLength: number;
  maxLength: number;
  showCounter: boolean;
  counterStyle: 'counter' | 'countdown';
}

function Sender({ sendMessage, placeholder, disabledInput, autofocus, onTextInputChange, buttonAlt,minLength,maxLength,showCounter,counterStyle }: Props) {
  const showChat = useSelector((state: GlobalState) => state.behavior.showChat);
  const inputRef = useRef(null);
  const [ msgLength, setLength ] = useState(0);
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
        onChange={(e) => { setLength(e.target.value.length); if(onTextInputChange) onTextInputChange(e);}}
      />
      {
        showCounter && inputRef.current &&           
          <Counter
            minLength={minLength}
            maxLength={maxLength}
            length={msgLength}
            counterStyle={counterStyle}
          />
      }      
      <button type="submit" className="rcw-send">
        <img src={send} className="rcw-send-icon" alt={buttonAlt} />
      </button>
    </form>
  );
}

export default Sender;
