import React from 'react';
import PropTypes from 'prop-types';
import Message from './components/Message';
import './styles.scss';

const Messages = props =>
  <div className="messages-container">
    {props.messages.map(message =>
      <Message
        messageType={message.messageType}
        text={message.text}
      />
    )}
  </div>;

Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object)
};

export default Messages;
