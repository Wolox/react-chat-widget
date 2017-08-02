import React from 'react';
import PropTypes from 'prop-types';
import Presentation from './components/Presentation';
import Messages from './components/Messages';
import Sender from './components/Sender';
import './style.scss';

const ConversationLayout = props =>
  <div className="conversation-container">
    <Presentation
      title={props.title}
      subtitle={props.subtitle}
    />
    <Messages
      messages={props.messages}
    />
    <Sender
      sendMessage={props.handleMessageSubmit}
    />
  </div>;

ConversationLayout.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  messages: PropTypes.arrayOf(PropTypes.object),
  handleMessageSubmit: PropTypes.func
};

export default ConversationLayout;
