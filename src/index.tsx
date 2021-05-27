import { Provider } from 'react-redux';

import Widget from './components/Widget';

import store from  './store';

import { AnyFunction } from './utils/types';

type Props = {
  handleNewUserMessage: AnyFunction;
  handleQuickButtonClicked?: AnyFunction;
  title?: string;
  titleAvatar?: string;
  subtitle?: string;
  senderPlaceHolder?: string;
  showCloseButton?: boolean;
  fullScreenMode?: boolean;
  autofocus?: boolean;
  profileAvatar?: string;
  launcher?: AnyFunction;
  handleTextInputChange?: (event: any) => void;
  chatId?: string;
  handleToggle?: AnyFunction;
  launcherOpenLabel?: string,
  launcherCloseLabel?: string,
  launcherCloseImg?: string,
  launcherOpenImg?: string,
  sendButtonAlt?: string;
  showTimeStamp?: boolean;
  imagePreview?: boolean;
  zoomStep?: number;
  handleSubmit?: AnyFunction;
} & typeof defaultProps;

function ConnectedWidget({
  title,
  titleAvatar,
  subtitle,
  senderPlaceHolder,
  showCloseButton,
  fullScreenMode,
  autofocus,
  profileAvatar,
  launcher,
  handleNewUserMessage,
  handleQuickButtonClicked,
  handleTextInputChange,
  chatId,
  handleToggle,
  launcherOpenLabel,
  launcherCloseLabel,
  launcherCloseImg,
  launcherOpenImg,
  sendButtonAlt,
  showTimeStamp,
  imagePreview,
  zoomStep,
  handleSubmit
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
        autofocus={autofocus}
        customLauncher={launcher}
        handleTextInputChange={handleTextInputChange}
        chatId={chatId}
        handleToggle={handleToggle}
        launcherOpenLabel={launcherOpenLabel}
        launcherCloseLabel={launcherCloseLabel}
        launcherCloseImg={launcherCloseImg}
        launcherOpenImg={launcherOpenImg}
        sendButtonAlt={sendButtonAlt}
        showTimeStamp={showTimeStamp}
        imagePreview={imagePreview}
        zoomStep={zoomStep} 
        handleSubmit={handleSubmit}
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
  autofocus: true,
  chatId: 'rcw-chat-container',
  launcherOpenLabel: 'Open chat',
  launcherCloseLabel: 'Close chat',
  launcherOpenImg: '',
  launcherCloseImg: '',
  sendButtonAlt: 'Send',
  showTimeStamp: true,
  imagePreview: false,
  zoomStep: 80,
};
ConnectedWidget.defaultProps = defaultProps;

export default ConnectedWidget;
