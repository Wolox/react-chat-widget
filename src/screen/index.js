import React from 'react';
import PropTypes from 'prop-types';
import Conversation from '../components/Conversation';
import Launcher from '../components/Launcher';
import './style.scss';

const WidgetScreen = props =>
  <div className="widget-container">
    {props.showChat ?
      <Conversation
        title={props.title}
        subtitle={props.subtitle}
      /> : null
    }
    <Launcher
      toggle={props.toggleConversation}
      chatOpened={props.showChat}
    />
  </div>;

WidgetScreen.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  showChat: PropTypes.bool,
  toggleConversation: PropTypes.func
};

export default WidgetScreen;
