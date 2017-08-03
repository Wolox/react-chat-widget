import React from 'react';
import PropTypes from 'prop-types';
import Conversation from './components/Conversation';
import Launcher from './components/Launcher';
import './style.scss';

const WidgetLayout = props =>
  <div className="widget-container">
    {props.showChat ?
      <Conversation
        title={props.title}
        subtitle={props.subtitle}
        sendMessage={props.sendMessage}
        newResponseMessage={props.newResponseMessage}
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
  sendMessage: PropTypes.func,
  newResponseMessage: PropTypes.func,
  showChat: PropTypes.bool,
  toggleConversation: PropTypes.func
};

export default WidgetLayout;
