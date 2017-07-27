import React, { Component } from 'react';
import Conversation from './components/Conversation';
import Drawer from './components/Drawer';

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
      <div>
        <Conversation
          show={this.state.showChat}
        />
        <Drawer
          toggle={this.toggleConversation}
        />
      </div>
    );
  }
}

export default Widget;
