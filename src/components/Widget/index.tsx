import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalState } from 'src/store/types';

import { toggleChat, addUserMessage, setCounterStyle, setMinLength, setMaxLength, showCounter, setMsgLength } from '../../store/actions';
import { AnyFunction } from '../../utils/types';
import WidgetLayout from './layout';

type Props = {
  title: string;
  titleAvatar?: string;
  subtitle: string;
  senderPlaceHolder: string;
  profileAvatar?: string;
  showCloseButton: boolean;
  fullScreenMode: boolean;
  autofocus: boolean;
  customLauncher?: AnyFunction;
  handleNewUserMessage: AnyFunction;
  handleQuickButtonClicked?: AnyFunction;
  handleTextInputChange?: (event: any) => void;
  chatId: string;
  launcherOpenLabel: string;
  launcherCloseLabel: string;
  sendButtonAlt: string;
  showTimeStamp: boolean;
  imagePreview?: boolean;
  zoomStep?: number;
  handleSubmit?: AnyFunction;
  minLength: number;
  maxLength: number;
  showcounter: boolean;  
  counterStyle: 'counter' | 'min' | 'max';
}

function Widget({
  title,
  titleAvatar,
  subtitle,
  senderPlaceHolder,
  profileAvatar,
  showCloseButton,
  fullScreenMode,
  autofocus,
  customLauncher,
  handleNewUserMessage,
  handleQuickButtonClicked,
  handleTextInputChange,
  chatId,
  launcherOpenLabel,
  launcherCloseLabel,
  sendButtonAlt,
  showTimeStamp,
  imagePreview,
  zoomStep,
  handleSubmit,
  minLength,
  maxLength,
  showcounter,
  counterStyle
}: Props) {

  const minlength = useSelector((state: GlobalState) => state.behavior.minLength);
  const maxlength = useSelector((state: GlobalState) => state.behavior.maxLength);
  const dispatch = useDispatch();
  
  useEffect(() => { 
    dispatch(setMinLength(minLength));
    dispatch(setMaxLength(maxLength));    
    dispatch(showCounter(showcounter));
    dispatch(setCounterStyle(counterStyle));  
  }, [minLength, maxLength, showcounter, counterStyle]);

  const toggleConversation = () => {
    dispatch(toggleChat());
  }

  const handleMessageSubmit = (event) => {
    event.preventDefault();
    const userInput = event.target.message.value;
    
    if (!userInput.trim()) {      
      return;      
    }

    if(userInput.length < minlength || userInput.length > maxlength)
      return;

    if(handleSubmit && typeof handleSubmit === 'function') {
      var handledSubmit = handleSubmit(userInput);
      if(typeof handledSubmit === "boolean" && handledSubmit) {
        dispatch(addUserMessage(userInput));
        handleNewUserMessage(userInput);
        event.target.message.value = '';
        dispatch(setMsgLength(0));
      }
    } else {
      dispatch(addUserMessage(userInput));
      handleNewUserMessage(userInput);
      event.target.message.value = '';
      dispatch(setMsgLength(0));
    }
    
  }

  /*
  const handleNewUserMessageResponse = (response) => {
    if(response) {
      if(response.minLength) setMinLength(response.minLength);
      if(response.maxLength) setMaxLength(response.maxLength);
      if(response.showCounter) setShowCounter(response.showCounter);
    }      
  }*/

  const onQuickButtonClicked = (event, value) => {
    event.preventDefault();
    handleQuickButtonClicked?.(value)
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
      autofocus={autofocus}
      customLauncher={customLauncher}
      onTextInputChange={handleTextInputChange}
      chatId={chatId}
      launcherOpenLabel={launcherOpenLabel}
      launcherCloseLabel={launcherCloseLabel}
      sendButtonAlt={sendButtonAlt}
      showTimeStamp={showTimeStamp}
      imagePreview={imagePreview}
      zoomStep={zoomStep}
    />
  );
}

export default Widget;

