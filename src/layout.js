import React from 'react';
import PropTypes from 'prop-types';
import Conversation from './components/Conversation';
import Launcher from './components/Launcher';
import './style.scss';

const WidgetLayout = props =>
  <div className="widget-container">
    {props.showChat &&
      <Conversation
        title={props.title}
        subtitle={props.subtitle}
        messages={props.messages}
        sendMessage={props.sendMessage}
        senderPlaceHolder={props.senderPlaceHolder}
        containerStyles={props.stylesInjected.messagesContainer}
        avatarStyles={props.stylesInjected.avatar}
        headerStyles={props.stylesInjected.header}
        messageStyles={props.stylesInjected.message}
        responsesStyles={props.stylesInjected.responses}
        snippetStyles={props.stylesInjected.snippet}
        profileAvatar={props.profileAvatar}
      />
    }
    <Launcher
      toggle={props.toggleConversation}
      chatOpened={props.showChat}
      styles={props.stylesInjected.launcher}
    />
  </div>;

WidgetLayout.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  messages: PropTypes.arrayOf(PropTypes.object),
  sendMessage: PropTypes.func,
  toggleConversation: PropTypes.func,
  showChat: PropTypes.bool,
  senderPlaceHolder: PropTypes.string,
  profileAvatar: PropTypes.string,
  stylesInjected: PropTypes.object // eslint-disable-line
};

export default WidgetLayout;
