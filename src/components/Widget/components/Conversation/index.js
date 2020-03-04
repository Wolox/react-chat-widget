import React from 'react';
import PropTypes from 'prop-types';

import Header from './components/Header';
import Messages from './components/Messages';
import Sender from './components/Sender';
import QuickButtons from './components/QuickButtons';
import './style.scss';

const Conversation = ({
  title,
  subtitle,
  toggleChat,
  showCloseButton,
  titleAvatar,
  className,
  profileAvatar,
  onQuickButtonClicked,
  sendMessage,
  senderPlaceHolder,
  disabledInput,
  autofocus
}) =>
  <div className={`rcw-conversation-container ${className}`}>
    <Header
      title={title}
      subtitle={subtitle}
      toggleChat={toggleChat}
      showCloseButton={showCloseButton}
      titleAvatar={titleAvatar}
    />
    <Messages
      profileAvatar={profileAvatar}
    />
    <QuickButtons onQuickButtonClicked={onQuickButtonClicked} />
    <Sender
      sendMessage={sendMessage}
      placeholder={senderPlaceHolder}
      disabledInput={disabledInput}
      autofocus={autofocus}
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
  autofocus: PropTypes.bool,
  className: PropTypes.string
};

export default Conversation;
