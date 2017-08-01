import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ConversationScreen from './screen';

const MESSAGES_TYPE = {
  CLIENT: 'client',
  RESPONSE: 'response'
};

export default class Conversation extends Component {
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
    // handle new message
    event.preventDefault();
  }

  render() {
    return (
      <ConversationScreen
        title={this.props.title}
        subtitle={this.props.subtitle}
        messages={this.state.messages}
        updateMessage={this.updateMessage}
        sendMessage={this.sendMessage}
      />
    );
  }
}

Conversation.propTypes = {
  show: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string
};
