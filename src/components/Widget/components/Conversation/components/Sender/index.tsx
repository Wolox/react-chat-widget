import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';

import { GlobalState } from 'src/store/types';

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
  const inputRef = useRef<HTMLSpanElement>(null);
  // @ts-ignore
  useEffect(() => { if (showChat && autofocus) inputRef.current?.focus(); }, [showChat]);

  const handlerOnChange = (event) => {
    onTextInputChange && onTextInputChange(event)
  }

  const handlerSendMessage = () => {
    const { current } = inputRef
    if(current?.innerHTML) {
      sendMessage(current.innerText);
      current.innerHTML = ''
    }
  }

  const handlerOnKeyPress = (event) => {
    if(event.charCode == 13 && !event.shiftKey) {
      event.preventDefault()
      handlerSendMessage();
    }
  }

  return (
    <div className="rcw-sender">
      <div className={cn('rcw-new-message', {
          'rcw-message-disable': disabledInput,
        })
      }>
        <span
          spellCheck
          className="rcw-input"
          role="textbox"
          contentEditable={!disabledInput} 
          ref={inputRef}
          placeholder={placeholder}
          onInput={handlerOnChange}
          onKeyPress={handlerOnKeyPress}
        />
      </div>
      <button type="submit" className="rcw-send" onClick={handlerSendMessage}>
        <img src={send} className="rcw-send-icon" alt={buttonAlt} />
      </button>
    </div>
  );
}

export default Sender;
