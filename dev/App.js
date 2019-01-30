import React, { Component } from 'react';
import { Widget, addResponseMessage, toggleMsgLoader } from '../index';

export default class App extends Component {
  componentDidMount() {
    addResponseMessage('Welcome to this awesome chat!');
  }

  handleNewUserMessage = (newMessage) => {
    toggleMsgLoader();
    setTimeout(() => {
      toggleMsgLoader();
      addResponseMessage(newMessage);
    }, 2000);
  }

  handleOnChangeMessage = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  }

  render() {
    return (
      <Widget
        title="Bienvenido"
        subtitle="Asistente virtual"
        senderPlaceHolder="Escribe aquí ..."
        handleNewUserMessage={this.handleNewUserMessage}
        handleOnChangeMessage={this.handleOnChangeMessage}
        badge={1}
      />
    );
  }
}
