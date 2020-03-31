import React from 'react';
import { connect } from 'react-redux';

import Conversation from './components/Conversation';
import Launcher from './components/Launcher';

import { AnyFunction } from '../../utils/types';

import './style.scss';

interface IWidget {
  title: string;
  titleAvatar: string;
  subtitle: string;
  onSendMessage: AnyFunction;
  onToggleConversation: AnyFunction;
  showChat: boolean;
  senderPlaceHolder: string;
  onQuickButtonClicked: AnyFunction;
  profileAvatar?: string;
  showCloseButton: boolean;
  disabledInput: boolean;
  fullScreenMode: boolean;
  badge: number;
  autofocus: boolean;
  customLauncher: AnyFunction;
}

const WidgetLayout = (props: IWidget) => (
  <div
    className={
      `rcw-widget-container ${props.fullScreenMode ? 'rcw-full-screen' : ''}`
    }
  >
    <Conversation
      title={props.title}
      subtitle={props.subtitle}
      sendMessage={props.onSendMessage}
      senderPlaceHolder={props.senderPlaceHolder}
      profileAvatar={props.profileAvatar}
      toggleChat={props.onToggleConversation}
      showChat={props.showChat}
      showCloseButton={props.showCloseButton}
      disabledInput={props.disabledInput}
      autofocus={props.autofocus}
      titleAvatar={props.titleAvatar}
      className={props.showChat ? 'active' : 'hidden'}
    />
    {props.customLauncher ?
      props.customLauncher(props.onToggleConversation) :
      !props.fullScreenMode &&
      <Launcher
        toggle={props.onToggleConversation}
        badge={props.badge}
      />
    }
  </div>
);

export default connect((store: { behavior: any }) => ({
  showChat: store.behavior.get('showChat'),
  disabledInput: store.behavior.get('disabledInput')
}))(WidgetLayout);
