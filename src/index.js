import React, { Component } from 'react';
import PropTypes from 'prop-types';
import union from 'lodash/union';
import moment from 'moment';
import WidgetLayout from './layout';
import { MESSAGES_TYPES, MESSAGE_SENDER, PROP_TYPES } from './constants';

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
    responses.map(response =>
      response.sender = MESSAGE_SENDER.RESPONSE
    );
    this.setState({
      messages: union(this.state.messages, responses)
    });
  }

  pushNewUserMessage = (text) => {
    const newMessage = {
      type: MESSAGES_TYPES.TEXT,
      text,
      sender: MESSAGE_SENDER.CLIENT,
      timestamp: moment().format()
    };
    this.setState(prevState => ({
      messages: prevState.messages.concat([newMessage])
    }), this.props.handleNewUserMessage(text));
  }

  handleMessageSubmit = (event) => {
    event.preventDefault();
    const userInput = event.target.message.value;
    if (userInput) {
      this.pushNewUserMessage(userInput);
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
        senderPlaceHolder={this.props.senderPlaceHolder}
        stylesInjected={this.props.stylesInjected}
        profileAvatar={this.props.profileAvatar}
      />
    );
  }
}

Widget.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  responseMessages: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleNewUserMessage: PropTypes.func.isRequired,
  senderPlaceHolder: PropTypes.string,
  stylesInjected: PROP_TYPES.STYLES,
  profileAvatar: PropTypes.string.isRequired
};

Widget.defaultProps = {
  title: 'Welcome',
  subtitle: 'This is your chat subtitle',
  senderPlaceHolder: 'Type a message...',
  stylesInjected: {}
};

export default Widget;
