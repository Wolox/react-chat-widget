import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Conversation from './components/Conversation';
import Launcher from './components/Launcher';
import './style.scss';

const WidgetLayout = ({
  title,
  subtitle,
  onSendMessage,
  senderPlaceHolder,
  profileAvatar,
  onToggleConversation,
  showChat,
  showCloseButton,
  disabledInput,
  autofocus,
  titleAvatar,
  badge,
  fullScreenMode,
  customLauncher
}) => (
  <div
    className={
      `rcw-widget-container ${fullScreenMode ? 'rcw-full-screen' : ''}`
    }
  >
    <Conversation
      title={title}
      subtitle={subtitle}
      sendMessage={onSendMessage}
      senderPlaceHolder={senderPlaceHolder}
      profileAvatar={profileAvatar}
      toggleChat={onToggleConversation}
      showChat={showChat}
      showCloseButton={showCloseButton}
      disabledInput={disabledInput}
      autofocus={autofocus}
      titleAvatar={titleAvatar}
      className={showChat ? 'active' : 'hidden'}
    />
    {customLauncher ?
      customLauncher(onToggleConversation) :
      !fullScreenMode &&
      <Launcher
        toggle={onToggleConversation}
        badge={badge}
      />
    }
  </div>
);

WidgetLayout.propTypes = {
  title: PropTypes.string,
  titleAvatar: PropTypes.string,
  subtitle: PropTypes.string,
  onSendMessage: PropTypes.func,
  onToggleConversation: PropTypes.func,
  showChat: PropTypes.bool,
  senderPlaceHolder: PropTypes.string,
  onQuickButtonClicked: PropTypes.func,
  profileAvatar: PropTypes.string,
  showCloseButton: PropTypes.bool,
  disabledInput: PropTypes.bool,
  fullScreenMode: PropTypes.bool,
  badge: PropTypes.number,
  autofocus: PropTypes.bool,
  customLauncher: PropTypes.func
};

export default connect(store => ({
  showChat: store.behavior.get('showChat'),
  disabledInput: store.behavior.get('disabledInput')
}))(WidgetLayout);
