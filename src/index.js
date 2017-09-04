import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import union from 'lodash/union';
import { toggleChat, addUserMessage } from 'actions';

import WidgetLayout from './layout';
import { MESSAGE_SENDER, PROP_TYPES } from './constants';

class Widget extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.responseMessages.length > this.props.responseMessages.length) {
      this.mergeMessages(nextProps.responseMessages);
    }
  }

  toggleConversation = () => {
    this.props.dispatch(toggleChat());
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
    this.props.dispatch(addUserMessage(text));
    this.props.handleNewUserMessage(text);
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
        messages={this.props.messages}
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
  messages: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  responseMessages: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleNewUserMessage: PropTypes.func.isRequired,
  senderPlaceHolder: PropTypes.string,
  stylesInjected: PROP_TYPES.STYLES,
  profileAvatar: PropTypes.string
};

Widget.defaultProps = {
  title: 'Welcome',
  subtitle: 'This is your chat subtitle',
  senderPlaceHolder: 'Type a message...',
  stylesInjected: {}
};

export default connect(store => ({
  messages: store.messages.get('messages')
}))(Widget);
