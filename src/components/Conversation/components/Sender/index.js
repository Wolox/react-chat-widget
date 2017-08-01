import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import send from '../../../../../assets/send.png';

const Sender = props =>
  <form className="sender" onSubmit={props.sendMessage}>
    <input type="text" className="new-message" onChange={props.handleMessageChange} />
    <button type="submit" className="send">
      <img src={send} className="send-icon" alt="send" />
    </button>
  </form>;

Sender.propTypes = {
  handleMessageChange: PropTypes.func,
  sendMessage: PropTypes.func
};

export default Sender;
