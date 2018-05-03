import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleChat, addUserMessage } from 'actions';
import { LAUNCHER_NAME } from 'constants';

import WidgetLayout from './layout';

class Widget extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.fullScreenMode) {
      this.props.dispatch(toggleChat());
    }
  }

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

  getCustomLauncher = () => {
    if (this.props.children) {
      if (React.Children.count(this.props.children) > 1) {
        if (React.Children.map(this.props.children, child => child.type.name).includes(LAUNCHER_NAME)) {
          const launcherComponent = React.Children.map(this.props.children, child => child.type.name).indexOf(LAUNCHER_NAME);
          return React.createElement(this.props.children[launcherComponent].type, this.props.children[launcherComponent].props);
        }
      }
      if (this.props.children.type.name === LAUNCHER_NAME) {
        return React.createElement(this.props.children.type, this.props.children.props);
      }
    }
    return null;
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
        fullScreenMode={this.props.fullScreenMode}
        badge={this.props.badge}
        autofocus={this.props.autofocus}
        customLauncher={this.getCustomLauncher()}
      />
    );
  }
}

Widget.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  handleNewUserMessage: PropTypes.func.isRequired,
  senderPlaceHolder: PropTypes.string,
  profileAvatar: PropTypes.string,
  showCloseButton: PropTypes.bool,
  fullScreenMode: PropTypes.bool,
  badge: PropTypes.number,
  autofocus: PropTypes.bool
};

export default connect()(Widget);
