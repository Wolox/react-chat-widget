import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import WidgetLayout from './layout';
import { MESSAGES_TYPES, MESSAGE_SENDER } from './constants';

class Widget extends Component {
  state = {
    showChat: false,
    messages: []
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.responseMessages.length > this.props.responseMessages.length) {
      this.mergeMessages(nextProps.responseMessages);
    }
  }

  toggleConversation = () => {
    this.setState({
      showChat: !this.state.showChat
    });
  }

  mergeMessages = (responses) => {
    this.setState({
      messages: this.state.messages.concat(responses)
    });
  }

  pushNewUserMessage = (text) => {
    const newMessage = {
      type: MESSAGES_TYPES.TEXT,
      text,
      sender: MESSAGE_SENDER.CLIENT,
      timestamp: moment().format()
    };
    this.setState({
      messages: this.state.messages.concat([newMessage])
    }, this.props.handleNewUserMessage(text));
  }

  handleMessageSubmit = (event) => {
    event.preventDefault();
    const userInput = event.target.message.value;
    if (userInput) {
      this.pushNewUserMessage();
      event.target.message.value = '';
    }
  }

  render() {
    return (
      <WidgetLayout
        showChat={this.state.showChat}
        messages={this.state.messages}
        toggleConversation={this.toggleConversation}
        sendMessage={this.handleMessageSubmit}
        title={this.props.title}
        subtitle={this.props.subtitle}
      />
    );
  }
}

Widget.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  responseMessages: PropTypes.arrayOf(PropTypes.object),
  handleNewUserMessage: PropTypes.func
};

export default Widget;
