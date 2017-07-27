import React from 'react';
import PropTypes from 'prop-types';

const Sender = props =>
  <input
    type="text"
    onChange={props.handleMessageChange}
    onKeyDown={props.sendMessage}
  />;

Sender.propTypes = {
  handleMessageChange: PropTypes.func,
  sendMessage: PropTypes.func
};

export default Sender;
