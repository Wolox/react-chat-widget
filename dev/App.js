import React, { Component } from 'react';
import { Widget, addResponseMessage, setQuickButtons } from '../index';
export default class App extends Component {
  componentDidMount() {
    addResponseMessage('Welcome to this awesome chat!');
  }

  handleNewUserMessage = (newMessage) => {
    if (newMessage === 'fruits') {
      setQuickButtons([ { label: 'Apple', value: 'apple' }, { label: 'Orange', value: 'orange' } ]);
    } else {
      addResponseMessage(newMessage);
    }
  }

  handleQuickButtonClicked = (e) => {
    addResponseMessage('Selected ' + e);
    setQuickButtons([]);
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
