import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WidgetScreen from './screen';

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
      <WidgetScreen
        title={this.props.title}
        subtitle={this.props.subtitle}
        showChat={this.state.showChat}
        toggleConversation={this.toggleConversation}
      />
    );
  }
}

Widget.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default Widget;
