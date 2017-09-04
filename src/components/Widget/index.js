import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PROP_TYPES } from 'constants';
import { toggleChat, addUserMessage } from 'actions';

import WidgetLayout from './layout';

class Widget extends Component {
  toggleConversation = () => {
    this.props.dispatch(toggleChat());
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

export default connect()(Widget);
