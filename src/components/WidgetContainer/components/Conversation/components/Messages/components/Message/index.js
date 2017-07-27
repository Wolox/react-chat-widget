import React from 'react';
import PropTypes from 'prop-types';

const Message = props =>
  <span style={props.messageType}>
    {props.message}
  </span>;

Message.propTypes = {
  message: PropTypes.string.isRequired,
  messageType: PropTypes.string.isRequired
};

export default Message;
