import React from 'react';
import PropTypes from 'prop-types';

import send from 'assets/send_button.svg';
import './style.scss';

const Sender = ({ sendMessage, placeholder, disabledInput, autofocus }) =>
  <form className="wlx-sender" onSubmit={sendMessage}>
    <input type="text" className="wlx-new-message" name="message" placeholder={placeholder} disabled={disabledInput} autoFocus={autofocus} autoComplete="off" />
    <button type="submit" className="wlx-send">
      <img src={send} className="wlx-send-icon" alt="send" />
    </button>
  </form>;

Sender.propTypes = {
  sendMessage: PropTypes.func,
  placeholder: PropTypes.string,
  disabledInput: PropTypes.bool,
  autofocus: PropTypes.bool
};

export default Sender;
