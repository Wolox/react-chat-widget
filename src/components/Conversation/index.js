import React from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header';
import Messages from './components/Messages';
import Sender from './components/Sender';
import './style.scss';

const Conversation = props =>
  <div className="conversation-container">
    <Header
      title={props.title}
      subtitle={props.subtitle}
      styles={props.headerStyles}
    />
    <Messages
      messages={props.messages}
      messageStyles={props.messageStyles}
      snippetStyles={props.snippetStyles}
    />
    <Sender
      sendMessage={props.sendMessage}
      placeholder={props.senderPlaceHolder}
    />
  </div>;

Conversation.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  messages: PropTypes.arrayOf(PropTypes.object),
  sendMessage: PropTypes.func,
  senderPlaceHolder: PropTypes.string,
  headerStyles: PropTypes.object, // eslint-disable-line
  messageStyles: PropTypes.object, // eslint-disable-line
  snippetStyles: PropTypes.object // eslint-disable-line
};

export default Conversation;
