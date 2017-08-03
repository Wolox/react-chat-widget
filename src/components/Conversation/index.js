import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ConversationLayout from './layout';
import { MESSAGES_TYPE } from '../../constants';

class Conversation extends Component {
  state = {
    message: {
      text: '',
      messageType: MESSAGES_TYPE.CLIENT
    },
    messages: []
  };

  componentDidUpdate() {
    const lastMessageIndex = this.state.messages.length - 1;
    const lastMessage = this.state.messages[lastMessageIndex];
    if (lastMessage.messageType === MESSAGES_TYPE.CLIENT) {
      this.props.sendMessage(lastMessage.text);
      this.props.newResponseMessage().then((message) => {
        this.pushNewMessage({ text: message });
      });
    }
  }

  pushNewMessage = ({ text, messageType = MESSAGES_TYPE.RESPONSE }) => {
    this.setState({
      messages: this.state.messages.concat([{ text, messageType }])
    });
  }

  handleMessageSubmit = (event) => {
    const newMessage = {
      text: event.target.message.value,
      messageType: MESSAGES_TYPE.CLIENT
    };
    event.preventDefault();
    this.pushNewMessage(newMessage);
    event.target.message.value = '';
  }

  render() {
    return (
      <ConversationLayout
        title={this.props.title}
        subtitle={this.props.subtitle}
        messages={this.state.messages}
        handleMessageSubmit={this.handleMessageSubmit}
      />
    );
  }
}

Conversation.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  sendMessage: PropTypes.func,
  newResponseMessage: PropTypes.func
};

export default Conversation;
