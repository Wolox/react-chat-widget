import React from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';

import { GlobalState } from 'src/store/types';
import { AnyFunction } from 'src/utils/types';

import Conversation from './components/Conversation';
import Launcher from './components/Launcher';

import './style.scss';

type Props = {
  title: string;
  titleAvatar?: string;
  subtitle: string;
  onSendMessage: AnyFunction;
  onToggleConversation: AnyFunction;
  senderPlaceHolder: string;
  onQuickButtonClicked: AnyFunction;
  profileAvatar?: string;
  showCloseButton: boolean;
  fullScreenMode: boolean;
  badge: number;
  autofocus: boolean;
  customLauncher?: AnyFunction;
  onTextInputChange?: (event: any) => void;
}

function WidgetLayout({
  title,
  titleAvatar,
  subtitle,
  onSendMessage,
  onToggleConversation,
  senderPlaceHolder,
  onQuickButtonClicked,
  profileAvatar,
  showCloseButton,
  fullScreenMode,
  autofocus,
  customLauncher,
  onTextInputChange
}: Props) {
  const { dissableInput, showChat } = useSelector((state: GlobalState) => ({
    showChat: state.behavior.showChat,
    dissableInput: state.behavior.disabledInput
  }));

  return (
    <div className={cn('rcw-widget-container', { 'rcw-full-screen': fullScreenMode })}>
      <Conversation
        title={title}
        subtitle={subtitle}
        sendMessage={onSendMessage}
        senderPlaceHolder={senderPlaceHolder}
        profileAvatar={profileAvatar}
        toggleChat={onToggleConversation}
        showCloseButton={showCloseButton}
        disabledInput={dissableInput}
        autofocus={autofocus}
        titleAvatar={titleAvatar}
        className={showChat ? 'active' : 'hidden'}
        onQuickButtonClicked={onQuickButtonClicked}
        onTextInputChange={onTextInputChange}
      />
      {customLauncher ?
        customLauncher(onToggleConversation) :
        !fullScreenMode &&
        <Launcher toggle={onToggleConversation} />
      }
    </div>
  );
}

export default WidgetLayout;
