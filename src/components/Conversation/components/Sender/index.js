import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import send from '../../../../../assets/send_button.svg';

const Sender = props =>
  <form className="sender" onSubmit={props.sendMessage}>
    <input type="text" className="new-message" name="message" placeholder="Escriba un mensaje..." autoFocus />
    <button type="submit" className="send">
      <img src={send} className="send-icon" alt="send" />
    </button>
  </form>;

Sender.propTypes = {
  sendMessage: PropTypes.func
};

export default Sender;
