import * as React from 'react';
import { Provider } from 'react-redux';

import Widget from './components/Widget';

import store from  './store';

import { AnyFunction } from './utils/types';

interface Props {
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
}

function ConnectedWidget(props: Props) {
  return (
    <Provider store={store}>
      <Widget
        title={props.title}
        titleAvatar={props.titleAvatar}
        subtitle={props.subtitle}
        handleNewUserMessage={props.handleNewUserMessage}
        handleQuickButtonClicked={props.handleQuickButtonClicked}
        senderPlaceHolder={props.senderPlaceHolder}
        profileAvatar={props.profileAvatar}
        showCloseButton={props.showCloseButton}
        fullScreenMode={props.fullScreenMode}
        badge={props.badge}
        autofocus={props.autofocus}
        customLauncher={props.launcher}
      />
    </Provider>
  );
}

ConnectedWidget.defaultProps = {
  title: 'Welcome',
  subtitle: 'This is your chat subtitle',
  senderPlaceHolder: 'Type a message...',
  showCloseButton: true,
  fullScreenMode: false,
  badge: 0,
  autofocus: true
};

export default ConnectedWidget;
