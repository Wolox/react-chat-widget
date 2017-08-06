import React from 'react';
import PropTypes from 'prop-types';
import Message from './components/Message';
import Snippet from './components/Snippet';
import { MESSAGES_TYPES } from '../../../../constants';
import './styles.scss';

const Messages = props =>
  <div className="messages-container">
    {props.messages.map(message =>
      message.type === MESSAGES_TYPES.TEXT ?
        <Message
          message={message}
        /> :
        <Snippet />
      )
    }
  </div>;

Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object)
};

export default Messages;
