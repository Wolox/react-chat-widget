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
      toggleChat={props.toggleChat}
    />
    <Messages
      profileAvatar={props.profileAvatar}
    />
    <Sender
      sendMessage={props.sendMessage}
      placeholder={props.senderPlaceHolder}
    />
  </div>;

Conversation.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  sendMessage: PropTypes.func,
  senderPlaceHolder: PropTypes.string,
  profileAvatar: PropTypes.string,
  toggleChat: PropTypes.func
};

Conversation.defaultProps = {
  headerStyles: {},
  messageStyles: {},
  responsesStyles: {},
  snippetStyles: {}
};

export default Conversation;
