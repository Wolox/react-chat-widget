import React from 'react';
import PropTypes from 'prop-types';
import Message from './components/Message';
import Snippet from './components/Snippet';
import { MESSAGES_TYPES } from '../../../../constants';
import './styles.scss';

const Messages = ({ messages }) =>
  <div className="messages-container">
    {messages.map(message =>
      message.type === MESSAGES_TYPES.TEXT ?
        <Message
          key={message.timestamp}
          message={message}
        /> :
        <Snippet />
    )}
  </div>;

Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object)
};

export default Messages;
