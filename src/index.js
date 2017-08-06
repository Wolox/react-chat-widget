import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WidgetLayout from './layout';
import { MESSAGE_SENDER } from './constants';

class Widget extends Component {
  state = {
    showChat: false,
    messages: [],
    userMessages: []
  };

  toggleConversation = () => {
    this.setState({
      showChat: !this.state.showChat
    });
  }

  pushNewUserMessage = (text) => {
    const newMessage = {
      text,
      messageType: MESSAGE_SENDER.CLIENT
    };
    this.setState({
      userMessages: this.state.messages.concat([{ text, messageType }])
    });
  }

  handleMessageSubmit = (event) => {
    event.preventDefault();
    this.pushNewUserMessage(event.target.message.value);
    event.target.message.value = '';
  }

  render() {
    return (
      <WidgetLayout
        showChat={this.state.showChat}
        messages={this.state.messages}
        toggleConversation={this.toggleConversation}
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
