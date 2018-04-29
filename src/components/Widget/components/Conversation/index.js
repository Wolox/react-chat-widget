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
      showCloseButton={props.showCloseButton}
    />
    <Messages
      profileAvatar={props.profileAvatar}
    />
    <Sender
      sendMessage={props.sendMessage}
      onSendMessageVoice={props.onSendMessageVoice}
      onSpeechError={props.onSpeechError}
      placeholder={props.senderPlaceHolder}
      disabledInput={props.disabledInput}
    />
  </div>;

Conversation.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  sendMessage: PropTypes.func,
  onSendMessageVoice: PropTypes.func,
  onSpeechError: PropTypes.func,
  senderPlaceHolder: PropTypes.string,
  profileAvatar: PropTypes.string,
  toggleChat: PropTypes.func,
  showCloseButton: PropTypes.bool,
  disabledInput: PropTypes.bool
};

export default Conversation;
