import React, { Component } from 'react';
import { Widget, addResponseMessage } from '../index';
import logo from "@assets/airaLogo.png";


export default class App extends Component {
  componentDidMount() {
    addResponseMessage('Welcome to this awesome chat!');
  }

  handleNewUserMessage = (newMessage) => {
    addResponseMessage(newMessage);
  }

  render() {
    return (
      <Widget
        title="Aira is here to assist you. Feel free to reach out!"
        titleAvatar={logo}
        subtitle=""
        handleNewUserMessage={this.handleNewUserMessage}
        badge={1}
      />
    );
  }
}