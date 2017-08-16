import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import send from '../../../../../assets/send_button.svg';

const Sender = ({ sendMessage, placeholder }) =>
  <form className="sender" onSubmit={sendMessage}>
    <input type="text" className="new-message" name="message" placeholder={placeholder} autoFocus autoComplete="off" />
    <button type="submit" className="send">
      <img src={send} className="send-icon" alt="send" />
    </button>
  </form>;

Sender.propTypes = {
  sendMessage: PropTypes.func,
  placeholder: PropTypes.string
};

export default Sender;
