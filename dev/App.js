import React from 'react';
import { Widget } from '../src';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'foo'
    };
  }

  render() {
    return (
      <Widget
        title="Bienvenido"
        subtitle="Asistente virtual"
        senderPlaceHolder="Escribe aquí ..."
      />
    );
  }
}
