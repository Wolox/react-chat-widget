import format from 'date-fns/format';
import MarkdownIt from 'markdown-it';
import React from 'react';
import { MessageTypes } from '../../../../../../../../store/types';
import './styles.scss';



type Props = {
  message: MessageTypes;
  showTimeStamp: boolean;
}

function Message({ message, showTimeStamp }: Props) {
  const sanitizedHTML = new MarkdownIt("default", { linkify: false })
    .render(message.text);

  return (
    <div className={`rcw-${message.sender}`}>
      <div className="rcw-message-text" dangerouslySetInnerHTML={{ __html: sanitizedHTML.replace(/\n$/, '') }} />
      {showTimeStamp && <span className="rcw-timestamp">{format(message.timestamp, 'hh:mm')}</span>}
    </div>
  );
}

export default Message;
