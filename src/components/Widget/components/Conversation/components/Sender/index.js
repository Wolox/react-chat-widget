import React from 'react';
import PropTypes from 'prop-types';

import send from '@assets/send_button.svg';

import './style.scss';

const Sender = ({ sendMessage, placeholder, disabledInput, autofocus, handleOnChangeMessage }) =>
  <form className="rcw-sender" onSubmit={sendMessage}>
    <input onChange={handleOnChangeMessage} type="text" className="rcw-new-message" name="message" placeholder={placeholder} disabled={disabledInput} autoFocus={autofocus} autoComplete="off" />
    <button type="submit" className="rcw-send">
      <img src={send} className="rcw-send-icon" alt="send" />
    </button>
  </form>;

Sender.propTypes = {
  sendMessage: PropTypes.func,
  handleOnChangeMessage: PropTypes.func,
  placeholder: PropTypes.string,
  disabledInput: PropTypes.bool,
  autofocus: PropTypes.bool
};

export default Sender;
