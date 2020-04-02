import React from 'react';
import { useSelector } from 'react-redux';

import Conversation from './components/Conversation';
import Launcher from './components/Launcher';

import { AnyFunction } from '../../utils/types';

import './style.scss';
import { GlobalState } from 'src/store/types';

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
  badge,
  autofocus,
  customLauncher
}: Props) {
  const { dissableInput, showChat } = useSelector((state: GlobalState) => ({
    showChat: state.behavior.showChat,
    dissableInput: state.behavior.disabledInput
  }));

  return (
    <div
      className={
        `rcw-widget-container ${fullScreenMode ? 'rcw-full-screen' : ''}`
      }
    >
      <Conversation
        title={title}
        subtitle={subtitle}
        sendMessage={onSendMessage}
        senderPlaceHolder={senderPlaceHolder}
        profileAvatar={profileAvatar}
        toggleChat={onToggleConversation}
        showChat={showChat}
        showCloseButton={showCloseButton}
        disabledInput={dissableInput}
        autofocus={autofocus}
        titleAvatar={titleAvatar}
        className={showChat ? 'active' : 'hidden'}
        onQuickButtonClicked={onQuickButtonClicked}
      />
      {customLauncher ?
        customLauncher(onToggleConversation) :
        !fullScreenMode &&
        <Launcher
          toggle={onToggleConversation}
          badge={badge}
        />
      }
    </div>
  );
}

export default WidgetLayout;
