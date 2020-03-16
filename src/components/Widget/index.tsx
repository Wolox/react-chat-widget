import React from 'react';
import { connect } from 'react-redux';

import { toggleChat, addUserMessage } from '@actions';
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
  dispatch: any;
}

function Widget(props: WidgetI) {
  const toggleConversation = () => {
    props.dispatch(toggleChat());
  }

  const handleMessageSubmit = (event) => {
    event.preventDefault();
    const userInput = event.target.message.value;
    if (userInput.trim()) {
      props.dispatch(addUserMessage(userInput));
      props.handleNewUserMessage(userInput);
    }
    event.target.message.value = '';
  }

  const handleQuickButtonClicked = (event, value) => {
    event.preventDefault();
    if (props.handleQuickButtonClicked) props.handleQuickButtonClicked(value);
  }

  return (
    <WidgetLayout
      onToggleConversation={toggleConversation}
      onSendMessage={handleMessageSubmit}
      onQuickButtonClicked={handleQuickButtonClicked}
      title={props.title}
      titleAvatar={props.titleAvatar}
      subtitle={props.subtitle}
      senderPlaceHolder={props.senderPlaceHolder}
      profileAvatar={props.profileAvatar}
      showCloseButton={props.showCloseButton}
      fullScreenMode={props.fullScreenMode}
      badge={props.badge}
      autofocus={props.autofocus}
      customLauncher={props.customLauncher}
    />
  );
}

export default connect()(Widget);
