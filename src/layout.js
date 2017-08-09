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
        messages={props.messages}
        sendMessage={props.sendMessage}
        senderPlaceHolder={props.senderPlaceHolder}
        headerStyles={props.stylesInyected.header}
        messageStyles={props.stylesInyected.message}
        snippetStyles={props.stylesInyected.snippet}
      /> : null
    }
    <Launcher
      toggle={props.toggleConversation}
      chatOpened={props.showChat}
      styles={props.stylesInyected.launcher}
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
  stylesInyected: PropTypes.object // eslint-disable-line
};

export default WidgetLayout;
