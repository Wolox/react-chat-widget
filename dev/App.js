import React, { Component } from 'react';
import { Widget, addResponseMessage, setQuickButtons } from '../index';
export default class App extends Component {
  componentDidMount() {
    addResponseMessage('Welcome to this awesome chat!');
  }

  handleNewUserMessage = (newMessage) => {
    if (newMessage === 'opciones') {
      setQuickButtons([ { label: 'Example', value: 'example' } ]);
    } else {
      addResponseMessage(newMessage);
    }
  }

  handleQuickButtonClicked = (e) => {
    console.log(e);
  }

  render() {
    return (
      <Widget
        title="Bienvenido"
        subtitle="Asistente virtual"
        senderPlaceHolder="Escribe aquí ..."
        handleNewUserMessage={this.handleNewUserMessage}
        handleQuickButtonClicked={this.handleQuickButtonClicked}
        badge={1}
      />
    );
  }
}
