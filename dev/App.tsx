import React, { Component } from 'react';
import { Widget, addResponseMessage, setQuickButtons, toggleMsgLoader, addLinkSnippet, setMaxLength, setMinLength, showCounter } from '../index';
import { addUserMessage } from '..';

export default class App extends Component {
  componentDidMount() {
    addResponseMessage('Welcome to this awesome chat!');
    addLinkSnippet({ link: 'https://google.com', title: 'Google' });
    addResponseMessage('![](https://raw.githubusercontent.com/Wolox/press-kit/master/logos/logo_banner.png)');
    addResponseMessage('![vertical](https://d2sofvawe08yqg.cloudfront.net/reintroducing-react/hero2x?1556470143)');
  }

  handleNewUserMessage = (newMessage: any) => {
    toggleMsgLoader();
    setTimeout(() => {
      toggleMsgLoader();
      if (newMessage.indexOf('fruits') > -1) {
        setQuickButtons([ { label: 'Apple', value: 'apple' }, { label: 'Orange', value: 'orange' }, { label: 'Pear', value: 'pear' }, { label: 'Banana', value: 'banana' } ]);
      } else {
        addResponseMessage(newMessage);
      }
    }, 2000);

    //showCounter(true);
    setMinLength(50);
    //setMaxLength(200);
  }

  handleQuickButtonClicked = (e: any) => {
    addResponseMessage('You selected ' + e);
    setQuickButtons([]);
  }

  handleTextInputChange = (e: any) => {
    // console.log(e.target.value);
  }

  handleSubmit = (msgText: string) => {
    if(msgText.length < 80) {
      addResponseMessage("Uh oh, please write a bit more.");
      return false;
    }
    return true;
  }

  render() {
    return (
      <div>
        <button style={{position: 'absolute', right: 40, bottom: 150}}>test</button>
        <Widget
          title="Bienvenido"
          subtitle="Asistente virtual"
          senderPlaceHolder="Escribe aquí ..."
          handleNewUserMessage={this.handleNewUserMessage}
          handleQuickButtonClicked={this.handleQuickButtonClicked}
          imagePreview
          // handleSubmit={this.handleSubmit}
          handleTextInputChange={this.handleTextInputChange}
          
          minLength={20}
          maxLength={100}
          showCounter={true}          
          counterStyle='min' // 'counter' | 'min' | 'max'
        />
      </div>
    );
  }
}
