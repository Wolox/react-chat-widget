import { useRef, useState } from 'react';
import { Picker } from 'emoji-mart';
import cn from 'classnames';

import Header from './components/Header';
import Messages from './components/Messages';
import Sender from './components/Sender';
import QuickButtons from './components/QuickButtons';

import { AnyFunction } from '../../../../utils/types';

import './style.scss';

interface ISenderRef {
  onSelectEmoji: (event: any) => void;
}

type Props = {
  title: string;
  subtitle: string;
  senderPlaceHolder: string;
  showCloseButton: boolean;
  disabledInput: boolean;
  autofocus: boolean;
  className: string;
  sendMessage: AnyFunction;
  toggleChat: AnyFunction;
  profileAvatar?: string;
  titleAvatar?: string;
  onQuickButtonClicked?: AnyFunction;
  onTextInputChange?: (event: any) => void;
  sendButtonAlt: string;
  showTimeStamp: boolean;
  emojis?: boolean;
};

function Conversation({
  title,
  subtitle,
  senderPlaceHolder,
  showCloseButton,
  disabledInput,
  autofocus,
  className,
  sendMessage,
  toggleChat,
  profileAvatar,
  titleAvatar,
  onQuickButtonClicked,
  onTextInputChange,
  sendButtonAlt,
  showTimeStamp,
  emojis
}: Props) {
  const [pickerOffset, setOffset] = useState(0)
  const senderRef = useRef<ISenderRef>(null!);
  const [pickerStatus, setPicket] = useState(false) 
 
  const onSelectEmoji = (emoji) => {
    senderRef.current?.onSelectEmoji(emoji)
  }

  const togglePicker = () => {
    setPicket(prevPickerStatus => !prevPickerStatus)
  }

  const handlerSendMsn = (event) => {
    sendMessage(event)
    if(pickerStatus) setPicket(false)
  }

  return (
    <div className={cn('rcw-conversation-container', className)} aria-live="polite">
      <Header
        title={title}
        subtitle={subtitle}
        toggleChat={toggleChat}
        showCloseButton={showCloseButton}
        titleAvatar={titleAvatar}
      />
      <Messages profileAvatar={profileAvatar} showTimeStamp={showTimeStamp} />
      <QuickButtons onQuickButtonClicked={onQuickButtonClicked} />
      {emojis && pickerStatus && (<Picker 
        style={{ position: 'absolute', bottom: pickerOffset, left: '0', width: '100%' }}
        onSelect={onSelectEmoji}
      />)}
      <Sender
        ref={senderRef}
        sendMessage={handlerSendMsn}
        placeholder={senderPlaceHolder}
        disabledInput={disabledInput}
        autofocus={autofocus}
        onTextInputChange={onTextInputChange}
        buttonAlt={sendButtonAlt}
        onPressEmoji={togglePicker}
        onChangeSize={setOffset}
      />
    </div>
  );
}

export default Conversation;
