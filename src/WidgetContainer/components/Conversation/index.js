import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Messages from './components/Messages';
import Sender from './components/Sender';

const MESSAGES_TYPE = {
  CLIENT: 'client',
  RESPONSE: 'response'
};

class Conversation extends Component {
  state = {
    message: {
      messageType: MESSAGES_TYPE.CLIENT,
      message: ''
    },
    messages: []
  };

  updateMessage = (event) => {
    this.setState({
      message: event.target.value
    });
  }

  sendMessage = (event) => {
    if (event.keyCode === 13 && event.target.value) {
      // handle new message
    }
  }

  render() {
    return (
      <div>
        <Messages
          messages={this.state.messages}
        />
        <Sender
          handleMessageChange={this.updateMessage}
          sendMessage={this.sendMessage}
        />
      </div>
    );
  }
}

Conversation.propTypes = {
  show: PropTypes.bool.isRequired
};

export default Conversation;
