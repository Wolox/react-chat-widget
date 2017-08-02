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
  onMessageCreated: PropTypes.func // onMessageCreated. esta es la prop que va a usar el dev de afuera.
};

export default Widget;
