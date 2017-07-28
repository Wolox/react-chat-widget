import React from 'react';
import PropTypes from 'prop-types';

const Sender = props =>
  <form onSubmit={props.sendMessage}>
    <input
      type="text"
      onChange={props.handleMessageChange}
    />
    <button type="submit">Enviar</button>
  </form>;

Sender.propTypes = {
  handleMessageChange: PropTypes.func,
  sendMessage: PropTypes.func
};

export default Sender;
