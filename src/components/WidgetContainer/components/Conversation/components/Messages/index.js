import React from 'react';
import PropTypes from 'prop-types';
import Message from './components/Message';

const Messages = props =>
  <div>
    {props.messages.map(message =>
      <Message
        messageType={message.type}
        message={message.message}
      />
    )}
  </div>;

Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object)
};

export default Messages;
