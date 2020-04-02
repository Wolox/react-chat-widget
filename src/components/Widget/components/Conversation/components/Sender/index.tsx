import React, { Component } from 'react';

const send = require('../../../../../../../assets/send_button.svg') as string;

import './style.scss';

type Props = {
  sendMessage: () => any;
  placeholder: string;
  disabledInput: boolean;
  autofocus: boolean;
}

function Sender({
  sendMessage,
  placeholder,
  disabledInput,
  autofocus
}: Props) {
  const input = React.createRef();

  // componentDidUpdate() {
  //   this.input.current.focus();
  // }

  return (
    <form className="rcw-sender" onSubmit={sendMessage}>
      <input type="text" className="rcw-new-message" name="message" placeholder={placeholder} disabled={disabledInput} autoFocus={autofocus} autoComplete="off"/>
      <button type="submit" className="rcw-send">
        <img src={send} className="rcw-send-icon" alt="send" />
      </button>
    </form>
  );
}

export default Sender;
