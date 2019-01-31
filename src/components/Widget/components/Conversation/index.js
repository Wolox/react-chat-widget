import React from 'react';
import PropTypes from 'prop-types';

import Header from './components/Header';
import Messages from './components/Messages';
import Sender from './components/Sender';
import QuickButtons from './components/QuickButtons';
import './style.scss';

const Conversation = props =>
  <div className="rcw-conversation-container">
    <Header
      title={props.title}
      subtitle={props.subtitle}
      toggleChat={props.toggleChat}
      showCloseButton={props.showCloseButton}
      titleAvatar={props.titleAvatar}
    />
    <Messages
      profileAvatar={props.profileAvatar}
    />
    <QuickButtons onQuickButtonClicked={props.onQuickButtonClicked} />
    <Sender
      sendMessage={props.sendMessage}
      placeholder={props.senderPlaceHolder}
      disabledInput={props.disabledInput}
      autofocus={props.autofocus}
    />
  </div>;

Conversation.propTypes = {
  title: PropTypes.string,
  titleAvatar: PropTypes.string,
  subtitle: PropTypes.string,
  sendMessage: PropTypes.func,
  senderPlaceHolder: PropTypes.string,
  profileAvatar: PropTypes.string,
  toggleChat: PropTypes.func,
  showCloseButton: PropTypes.bool,
  disabledInput: PropTypes.bool,
  autofocus: PropTypes.bool
};

export default Conversation;
