import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Conversation from './components/Conversation';
import Launcher from './components/Launcher';
import './style.scss';

const WidgetLayout = props => (
  <div
    className={
      `rcw-widget-container ${props.fullScreenMode ? 'rcw-full-screen' : ''} ${props.showChat ? 'rcw-opened' : ''}`
    }
  >
    {props.showChat &&
      <Conversation
        title={props.title}
        subtitle={props.subtitle}
        sendMessage={props.onSendMessage}
        senderPlaceHolder={props.senderPlaceHolder}
        onQuickButtonClicked={props.onQuickButtonClicked}
        profileAvatar={props.profileAvatar}
        toggleChat={props.onToggleConversation}
        showChat={props.showChat}
        showCloseButton={props.showCloseButton}
        disabledInput={props.disabledInput}
        autofocus={props.autofocus}
        titleAvatar={props.titleAvatar}
      />
    }
    {props.customLauncher ?
      props.customLauncher(props.onToggleConversation) :
      !props.fullScreenMode &&
      <Launcher
        toggle={props.onToggleConversation}
        badge={props.badge}
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
