import * as React from 'react';

import Header from './components/Header';
import Messages from './components/Messages';
import Sender from './components/Sender';
import QuickButtons from './components/QuickButtons';
import './style.scss';

interface IConversation {
  title: string;
  titleAvatar: string;
  subtitle: string;
  sendMessage: Function;
  senderPlaceHolder: string;
  profileAvatar: string;
  toggleChat: Function;
  showCloseButton: boolean;
  disabledInput: boolean;
  autofocus: boolean;
  onQuickButtonClicked: Function;
  showChat: boolean;
};

const Conversation = (props: IConversation) =>
  <div className="rcw-conversation-container">
    <Header
      title={props.title}
      subtitle={props.subtitle}
      toggleChat={props.toggleChat}
      showCloseButton={props.showCloseButton}
      titleAvatar={props.titleAvatar}
    />
    <Messages profileAvatar={props.profileAvatar} />
    <QuickButtons onQuickButtonClicked={props.onQuickButtonClicked} />
    <Sender
      sendMessage={props.sendMessage}
      placeholder={props.senderPlaceHolder}
      disabledInput={props.disabledInput}
      autofocus={props.autofocus}
    />
  </div>;

export default Conversation;
