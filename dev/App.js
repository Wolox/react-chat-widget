import React, { Component } from 'react';
import { Widget, addUserMessage } from '../index';

export default class App extends Component {
  componentDidMount() {
    addResponseMessage('Welcome to this awesome chat!');
  }

  handleNewUserMessage = (newMessage) => {
    addUserMessage(newMessage);
  }

  render() {
    return (
      <Widget
        title="Bienvenido"
        subtitle="Asistente virtual"
        senderPlaceHolder="Escribe aquí ..."
        handleNewUserMessage={this.handleNewUserMessage}
        badge={1}
      />
    );
  }
}
