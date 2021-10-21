import format from 'date-fns/format';
import MarkdownIt from 'markdown-it';
import React from 'react';
import { MessageOrigin } from '../../../../../../../../constants';
import { MessageTypes } from '../../../../../../../../store/types';
import './styles.scss';



type Props = {
  message: MessageTypes;
  showTimeStamp: boolean;
}

function Message({ message, showTimeStamp }: Props) {
  const sanitizedHTML = new MarkdownIt("default", { linkify: false })
    .render(message.text);
  const isClient = (origin: MessageOrigin) => origin === MessageOrigin.client;

  return (
    <div className={`rcw-${message.origin}`}>
      <div className="rcw-message-text" dangerouslySetInnerHTML={{ __html: sanitizedHTML.replace(/\n$/, '') }} />
      <div className="rcw-status-line">
        {showTimeStamp && <span className="rcw-timestamp">{format(message.timestamp, 'hh:mm')}</span>}
        {message.sender && !isClient(message.origin) && <span className="rcw-sender-line">{message.sender}</span>}
      </div>
    </div>
  );
}

export default Message;
