import * as React from 'react';
import { Provider } from 'react-redux';

import Widget from './components/Widget';
import store from '../src/store/store';

function ConnectedWidget(props: any) {
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
