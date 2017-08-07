import React from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header';
import Messages from './components/Messages';
import Sender from './components/Sender';

const Conversation = props =>
  <div className="conversation-container">
    <Header
      title={props.title}
      subtitle={props.subtitle}
    />
    <Messages
      messages={props.messages}
    />
    <Sender
      sendMessage={props.sendMessage}
    />
  </div>;

Conversation.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  messages: PropTypes.arrayOf(PropTypes.object),
  sendMessage: PropTypes.func
};

export default Conversation;
