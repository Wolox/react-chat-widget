import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Sender = props =>
  <form className="sender" onSubmit={props.sendMessage}>
    <input type="text" className="new-message" onChange={props.handleMessageChange} />
    <button type="submit" className="send">Enviar</button>
  </form>;

Sender.propTypes = {
  handleMessageChange: PropTypes.func,
  sendMessage: PropTypes.func
};

export default Sender;
