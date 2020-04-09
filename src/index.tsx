import React from 'react';
import { Provider } from 'react-redux';

import Widget from './components/Widget';

import store from  './store';

import { AnyFunction } from './utils/types';

type Props = {
  title?: string;
  titleAvatar?: string;
  subtitle?: string;
  senderPlaceHolder?: string;
  showCloseButton?: boolean;
  fullScreenMode?: boolean;
  badge?: number;
  autofocus?: boolean;
  profileAvatar?: string;
  launcher?: AnyFunction;
  handleNewUserMessage: AnyFunction;
  handleQuickButtonClicked: AnyFunction;
  handleTextInputChange?: (event: any) => void;
  chatId?: string;
  launcherOpenLabel?: string,
  launcherCloseLabel?: string,
  sendButtonAlt?: string
} & typeof defaultProps;

function ConnectedWidget({
  title,
  titleAvatar,
  subtitle,
  senderPlaceHolder,
  showCloseButton,
  fullScreenMode,
  badge,
  autofocus,
  profileAvatar,
  launcher,
  handleNewUserMessage,
  handleQuickButtonClicked,
  handleTextInputChange,
  chatId,
  launcherOpenLabel,
  launcherCloseLabel,
  sendButtonAlt
}: Props) {
  return (
    <Provider store={store}>
      <Widget
        title={title}
        titleAvatar={titleAvatar}
        subtitle={subtitle}
        handleNewUserMessage={handleNewUserMessage}
        handleQuickButtonClicked={handleQuickButtonClicked}
        senderPlaceHolder={senderPlaceHolder}
        profileAvatar={profileAvatar}
        showCloseButton={showCloseButton}
        fullScreenMode={fullScreenMode}
        badge={badge}
        autofocus={autofocus}
        customLauncher={launcher}
        handleTextInputChange={handleTextInputChange}
        chatId={chatId}
        launcherOpenLabel={launcherOpenLabel}
        launcherCloseLabel={launcherCloseLabel}
        sendButtonAlt={sendButtonAlt}
      />
    </Provider>
  );
}

const defaultProps = {
  title: 'Welcome',
  subtitle: 'This is your chat subtitle',
  senderPlaceHolder: 'Type a message...',
  showCloseButton: true,
  fullScreenMode: false,
  badge: 0,
  autofocus: true,
  chatId: 'rcw-chat-container',
  launcherOpenLabel: 'Open chat',
  launcherCloseLabel: 'Close chat',
  sendButtonAlt: 'Send'
};
ConnectedWidget.defaultProps = defaultProps;

export default ConnectedWidget;
