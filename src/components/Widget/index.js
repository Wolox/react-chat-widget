import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { toggleChat, addUserMessage } from "@actions";

import WidgetLayout from "./layout";

class Widget extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.fullScreenMode) {
      this.props.dispatch(toggleChat());
    }
  }

  toggleConversation = () => {
    this.props.dispatch(toggleChat());
  };

  handleMessageSubmit = event => {
    event.preventDefault();
    const userInput = event.target.message.value;
    if (userInput.trim()) {
      this.props.dispatch(addUserMessage(userInput));
      this.props.handleNewUserMessage(userInput);
    }
    event.target.message.value = "";
  };

  handleQuickButtonClicked = (event, value) => {
    event.preventDefault();

    if (this.props.handleQuickButtonClicked) {
      this.props.handleQuickButtonClicked(value);
    }
  };

  render() {
    console.log(this.props);
    return (
      <WidgetLayout
        onToggleConversation={this.toggleConversation}
        onSendMessage={this.handleMessageSubmit}
        onQuickButtonClicked={this.handleQuickButtonClicked}
        chatId={this.props.chatId}
        title={this.props.title}
        titleAvatar={this.props.titleAvatar}
        subtitle={this.props.subtitle}
        senderPlaceHolder={this.props.senderPlaceHolder}
        profileAvatar={this.props.profileAvatar}
        showCloseButton={this.props.showCloseButton}
        fullScreenMode={this.props.fullScreenMode}
        badge={this.props.badge}
        autofocus={this.props.autofocus}
        customLauncher={this.props.customLauncher}
        launcherOpenLabel={this.props.launcherOpenLabel}
        launcherCloseLabel={this.props.launcherCloseLabel}
        sendButtonAlt={this.props.sendButtonAlt}
      />
    );
  }
}

Widget.propTypes = {
  chatId: PropTypes.string,
  title: PropTypes.string,
  titleAvatar: PropTypes.string,
  subtitle: PropTypes.string,
  handleNewUserMessage: PropTypes.func.isRequired,
  handleQuickButtonClicked: PropTypes.func.isRequired,
  senderPlaceHolder: PropTypes.string,
  profileAvatar: PropTypes.string,
  showCloseButton: PropTypes.bool,
  fullScreenMode: PropTypes.bool,
  badge: PropTypes.number,
  autofocus: PropTypes.bool,
  customLauncher: PropTypes.func,
  launcherOpenLabel: PropTypes.string,
  launcherCloseLabel: PropTypes.string,
  sendButtonAlt: PropTypes.string
};

export default connect()(Widget);
