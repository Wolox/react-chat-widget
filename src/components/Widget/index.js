import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleChat, addUserMessage } from 'actions';

import WidgetLayout from './layout';

class Widget extends Component {
  toggleConversation = () => {
    this.props.dispatch(toggleChat());
  }

  handleMessageSubmit = (event) => {
    event.preventDefault();
    const userInput = event.target.message.value;
    if (userInput) {
      this.props.dispatch(addUserMessage(userInput));
      this.props.handleNewUserMessage(userInput);
    }
    event.target.message.value = '';
  }

  render() {
    return (
      <WidgetLayout
        onToggleConversation={this.toggleConversation}
        onSendMessage={this.handleMessageSubmit}
        title={this.props.title}
        subtitle={this.props.subtitle}
        senderPlaceHolder={this.props.senderPlaceHolder}
        profileAvatar={this.props.profileAvatar}
        showCloseButton={this.props.showCloseButton}
      />
    );
  }
}

Widget.propTypes = {
  handleNewUserMessage: PropTypes.func.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  senderPlaceHolder: PropTypes.string,
  profileAvatar: PropTypes.string,
  showCloseButton: PropTypes.bool
};

Widget.defaultProps = {
  title: 'Welcome',
  subtitle: 'This is your chat subtitle',
  senderPlaceHolder: 'Type a message...',
  showCloseButton: true
};

export default connect()(Widget);
