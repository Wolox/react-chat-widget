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
    }
  }

  pushNewMessage = ({ text, messageType = MESSAGES_TYPE.RESPONSE }) => {
    this.setState({
      messages: this.state.messages.concat([{ text, messageType }])
    });
  }

  handleMessageSubmit = (event) => {
    // todo: quye llegue el message
    // todo: manejar el state de la lista de mensaje aca. gacer setState
    // todo: llamar a la prop que viene de afuera
      // this.props.onMessageCreated(message).then((response) => {
      //   this.setState({ messages: this.state.messages.concat(response) })
      // })
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
  sendMessage: PropTypes.func
};

export default Conversation;
