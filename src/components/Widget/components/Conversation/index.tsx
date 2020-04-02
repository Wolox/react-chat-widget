import React from 'react';

import Header from './components/Header';
import Messages from './components/Messages';
import Sender from './components/Sender';
import QuickButtons from './components/QuickButtons';

import { AnyFunction } from '../../../../utils/types';

import './style.scss';

type Props = {
  title: string;
  subtitle: string;
  senderPlaceHolder: string;
  showCloseButton: boolean;
  disabledInput: boolean;
  autofocus: boolean;
  showChat: boolean;
  className: string;
  sendMessage: AnyFunction;
  toggleChat: AnyFunction;
  profileAvatar?: string;
  titleAvatar?: string;
  onQuickButtonClicked?: AnyFunction;
};

function Conversation(props: Props) {
  return (
    <div className={`rcw-conversation-container ${props.className}`}>
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
    </div>
  );
}

export default Conversation;
