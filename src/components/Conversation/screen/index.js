import React from 'react';
import PropTypes from 'prop-types';
import Presentation from '../components/Presentation';
import Messages from '../components/Messages';
import Sender from '../components/Sender';

const ConversationScreen = props =>
  <div>
    <Presentation
      title={props.title}
      subtitle={props.subtitle}
      styling={props.styling}
    />
    <Messages
      messages={props.messages}
    />
    <Sender
      handleMessageChange={props.updateMessage}
      sendMessage={props.sendMessage}
    />
  </div>;

ConversationScreen.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  styling: PropTypes.object,
  messages: PropTypes.arrayOf(PropTypes.object),
  updateMessage: PropTypes.func,
  sendMessage: PropTypes.func
};

export default ConversationScreen;
