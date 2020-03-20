import React from 'react';
import { connect } from 'react-redux';

import { toggleChat, addUserMessage } from '../../store/actions';
import { AnyFunction } from '../../utils/types';

import WidgetLayout from './layout';

export interface WidgetI {
  title?: string;
  titleAvatar?: string;
  subtitle?: string;
  senderPlaceHolder?: string;
  profileAvatar?: string;
  showCloseButton?: boolean;
  fullScreenMode?: boolean;
  badge?: number;
  autofocus?: boolean;
  customLauncher?: AnyFunction;
  handleNewUserMessage: AnyFunction;
  handleQuickButtonClicked: AnyFunction;
  dispatch: AnyFunction;
}

function Widget({
  title,
  titleAvatar,
  subtitle,
  senderPlaceHolder,
  profileAvatar,
  showCloseButton,
  fullScreenMode,
  badge,
  autofocus,
  customLauncher,
  handleNewUserMessage,
  handleQuickButtonClicked,
  dispatch
}: WidgetI) {

  const toggleConversation = () => {
    dispatch(toggleChat());
  }

  const handleMessageSubmit = (event) => {
    event.preventDefault();
    const userInput = event.target.message.value;
    if (userInput.trim()) {
      dispatch(addUserMessage(userInput));
      handleNewUserMessage(userInput);
    }
    event.target.message.value = '';
  }

  const onQuickButtonClicked = (event, value) => {
    event.preventDefault();
    if (handleQuickButtonClicked) handleQuickButtonClicked(value);
  }

  return (
    <WidgetLayout
      onToggleConversation={toggleConversation}
      onSendMessage={handleMessageSubmit}
      onQuickButtonClicked={onQuickButtonClicked}
      title={title}
      titleAvatar={titleAvatar}
      subtitle={subtitle}
      senderPlaceHolder={senderPlaceHolder}
      profileAvatar={profileAvatar}
      showCloseButton={showCloseButton}
      fullScreenMode={fullScreenMode}
      badge={badge}
      autofocus={autofocus}
      customLauncher={customLauncher}
    />
  );
}

export default connect()(Widget);
