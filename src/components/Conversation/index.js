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

  pushNewMessage = ({ text, messageType = MESSAGES_TYPE.RESPONSE }, callback) => {
    this.setState({
      messages: this.state.messages.concat([{ text, messageType }])
    }, callback());
  }

  handleMessageSubmit = (event) => {
    // todo: quye llegue el message
    // todo: manejar el state de la lista de mensaje aca. gacer setState
    // todo: llamar a la prop que viene de afuera
      // this.props.onMessageCreated(message).then((response) => {
      //   this.setState({ messages: this.state.messages.concat(response) })
      // })
    const newMessage = {
      text: event.target[0].value,
      messageType: MESSAGES_TYPE.CLIENT
    };
    debugger
    event.preventDefault();
    this.pushNewMessage(newMessage, this.props.sendMessage(event.target.message.value));
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
