import format from 'date-fns/format';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MessageOrigin } from '../../../../../../constants';
import { markAllMessagesRead, setBadgeCount } from '../../../../../../store/actions';
import { CustomCompMessage, GlobalState, Link, MessageTypes } from '../../../../../../store/types';
import { scrollToBottom } from '../../../../../../utils/messages';
import Loader from './components/Loader';
import './styles.scss';



type Props = {
  showTimeStamp: boolean,
  profileAvatar?: string;
  profileClientAvatar?: string;
}

function Messages({ profileAvatar, profileClientAvatar, showTimeStamp }: Props) {
  const dispatch = useDispatch();
  const { messages, typing, showChat, badgeCount } = useSelector((state: GlobalState) => ({
    messages: state.messages.messages,
    badgeCount: state.messages.badgeCount,
    typing: state.behavior.messageLoader,
    showChat: state.behavior.showChat
  }));

  const messageRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    // @ts-ignore
    scrollToBottom(messageRef.current);
    if (showChat && badgeCount) dispatch(markAllMessagesRead());
    else dispatch(setBadgeCount(messages.filter((message) => message.unread).length));
  }, [messages, badgeCount, showChat]);

  const getComponentToRender = (message: MessageTypes | Link | CustomCompMessage) => {
    const ComponentToRender = message.component;
    if (message.type === 'component') {
      return <ComponentToRender {...message.props} />;
    }
    return <ComponentToRender message={message} showTimeStamp={showTimeStamp} />;
  };

  // TODO: Fix this function or change to move the avatar to last message from response
  // const shouldRenderAvatar = (message: Message, index: number) => {
  //   const previousMessage = messages[index - 1];
  //   if (message.showAvatar && previousMessage.showAvatar) {
  //     dispatch(hideAvatar(index));
  //   }
  // }

  const isClient = (sender: MessageOrigin) => sender === MessageOrigin.client;

  return (
    <div id="messages" className="rcw-messages-container" ref={messageRef}>
      {messages?.map((message, index) =>
        <div className={`rcw-message ${isClient(message.origin) ? 'rcw-message-client' : ''}`}
          key={`${index}-${format(message.timestamp, 'hh:mm')}`}>
          {((profileAvatar && !isClient(message.origin)) || (profileClientAvatar && isClient(message.origin))) &&
            message.showAvatar &&
            <img
              src={isClient(message.origin) ? profileClientAvatar : profileAvatar}
              className={`rcw-avatar ${isClient(message.origin) ? 'rcw-avatar-client' : ''}`}
              alt="profile"
            />
          }
          {getComponentToRender(message)}
        </div>
      )}
      <Loader typing={typing} />
    </div>
  );
}

export default Messages;
