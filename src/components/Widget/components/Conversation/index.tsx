import { useRef, useState, useEffect } from 'react';
import { EmojiData, Picker } from 'emoji-mart';
import cn from 'classnames';

import Header from './components/Header';
import Messages from './components/Messages';
import Sender from './components/Sender';
import QuickButtons from './components/QuickButtons';

import { AnyFunction } from '../../../../utils/types';

import './style.scss';
import React from 'react';

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
  sendMessage: (text: string) => void;
  toggleChat: AnyFunction;
  profileAvatar?: string;
  profileClientAvatar?: string;
  titleAvatar?: string;
  onQuickButtonClicked?: AnyFunction;
  onTextInputChange?: (event: any) => void;
  sendButtonAlt: string;
  showTimeStamp: boolean;
  resizable?: boolean;
  emojis?: boolean;
  timestampFormat?: string;
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
  profileClientAvatar,
  titleAvatar,
  onQuickButtonClicked,
  onTextInputChange,
  sendButtonAlt,
  showTimeStamp,
  resizable,
  emojis,
  timestampFormat
}: Props) {
  const [containerDiv, setContainerDiv] = useState<HTMLElement | null>();
  let startX: number;
  let startWidth: number;

  useEffect(() => {
    const containerDiv = document.getElementById('rcw-conversation-container');
    setContainerDiv(containerDiv);
  }, []);

  const initResize = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (resizable) {
      startX = e.clientX;
      if (document.defaultView && containerDiv) {
        startWidth = parseInt(document.defaultView.getComputedStyle(containerDiv).width);
        window.addEventListener('mousemove', resize, false);
        window.addEventListener('mouseup', stopResize, false);
      }
    }
  }

  const resize = (e: MouseEvent) => {
    if (containerDiv) {
      containerDiv.style.width = (startWidth - e.clientX + startX) + 'px';
    }
  }

  const stopResize = () => {
    window.removeEventListener('mousemove', resize, false);
    window.removeEventListener('mouseup', stopResize, false);
  }

  const [pickerOffset, setOffset] = useState(0)
  const senderRef = useRef<ISenderRef>(null!);
  const [pickerStatus, setPicket] = useState(false)

  const onSelectEmoji = (emoji: EmojiData) => {
    senderRef.current?.onSelectEmoji(emoji);
  }

  const togglePicker = () => {
    setPicket(prevPickerStatus => !prevPickerStatus);
  }

  const handlerSendMsn = (text: string) => {
    sendMessage(text);
    if (pickerStatus) {
      setPicket(false);
    }
  }

  return (
    <div id="rcw-conversation-container" onMouseDown={initResize}
      className={cn('rcw-conversation-container', className)} aria-live="polite">
      {resizable && <div className="rcw-conversation-resizer" />}
      <Header
        title={title}
        subtitle={subtitle}
        toggleChat={toggleChat}
        showCloseButton={showCloseButton}
        titleAvatar={titleAvatar}
      />
      <Messages
        profileAvatar={profileAvatar}
        profileClientAvatar={profileClientAvatar}
        showTimeStamp={showTimeStamp}
        timestampFormat={timestampFormat}
      />
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
