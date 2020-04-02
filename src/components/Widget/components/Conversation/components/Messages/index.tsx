import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { hideAvatar } from '../../../../../..//store/actions';
import { scrollToBottom } from '../../../../../../utils/messages';
import { Message, Link, CustomCompMessage, GlobalState } from '../../../../../../store/types';

import Loader from './components/Loader';
import './styles.scss';

function Messages(props) {
  const messages = useSelector((state: GlobalState) => state.messages.messages);
  const typing = useSelector((state: GlobalState) => state.behavior.messageLoader);
  const dispatch = useDispatch();

  const { profileAvatar } = props;
  
  let $message: HTMLDivElement | null;

  // useEffect(() => scrollToBottom($message), [messages]);

  const getComponentToRender = (message: Message | Link | CustomCompMessage) => {
    const ComponentToRender = message.component;
    if (message.type === 'component') {
      return <ComponentToRender {...message.props} />;
    }
    return <ComponentToRender message={message} />;
  };

  // TODO: Fix this function or change to move the avatar to last message from response
  // const shouldRenderAvatar = (message: Message, index: number) => {
  //   const previousMessage = messages[index - 1];
  //   if (message.showAvatar && previousMessage.showAvatar) {
  //     dispatch(hideAvatar(index));
  //   }
  // }

  return (
    <div id="messages" className="rcw-messages-container" ref={msg => $message = msg}>
      {messages?.map((message, index) =>
        <div className="rcw-message" key={index}>
          {profileAvatar &&
            message.showAvatar &&
            <img src={profileAvatar} className="rcw-avatar" alt="profile" />
          }
          {getComponentToRender(message)}
        </div>
      )}
      <Loader typing={typing} />
    </div>
  );
}

export default Messages;
