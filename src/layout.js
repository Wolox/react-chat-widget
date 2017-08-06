import React from 'react';
import PropTypes from 'prop-types';
import Conversation from './components/Conversation';
import Launcher from './components/Launcher';
import { MESSAGE_SENDER, MESSAGES_TYPES } from './constants';
import './style.scss';

const WidgetLayout = props =>
  <div className="widget-container">
    {props.showChat ?
      <Conversation
        title={props.title}
        subtitle={props.subtitle}
        messages={props.messages}
        sendMessage={props.sendMessage}
      /> : null
    }
    <Launcher
      toggle={props.toggleConversation}
      chatOpened={props.showChat}
    />
  </div>;

WidgetLayout.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  messages: PropTypes.arrayOf(PropTypes.shape({
    messageType: PropTypes.oneOf([
      MESSAGES_TYPES.TEXT,
      MESSAGES_TYPES.SNIPPET.LINK
    ]),
    text: PropTypes.string,
    timestamp: PropTypes.string,

  })),
  sendMessage: PropTypes.func,
  toggleConversation: PropTypes.func,
  showChat: PropTypes.bool
};

export default WidgetLayout;
