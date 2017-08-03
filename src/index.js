import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WidgetLayout from './layout';

class Widget extends Component {
  state = {
    showChat: false
  };

  toggleConversation = () => {
    this.setState({
      showChat: !this.state.showChat
    });
  }

  render() {
    return (
      <WidgetLayout
        title={this.props.title}
        subtitle={this.props.subtitle}
        sendMessage={this.props.sendMessage}
        newResponseMessage={this.props.newResponseMessage}
        showChat={this.state.showChat}
        toggleConversation={this.toggleConversation}
      />
    );
  }
}

Widget.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  sendMessage: PropTypes.func,
  newResponseMessage: PropTypes.func
};

export default Widget;
