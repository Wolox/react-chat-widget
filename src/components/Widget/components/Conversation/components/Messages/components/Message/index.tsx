import React from 'react';
import format from 'date-fns/format';
import markdownIt from 'markdown-it';
import markdownItSup from 'markdown-it-sup';
import markdownItSanitizer from 'markdown-it-sanitizer';
import markdownItLinkAttributes from 'markdown-it-link-attributes';

import { Message } from 'src/store/types';

import './styles.scss';

type Props = {
  message: Message;
}

function Message({ message }: Props) {
  const sanitizedHTML = markdownIt().use(markdownItSup)
    .use(markdownItSanitizer)
    .use(markdownItLinkAttributes, { attrs: { target: '_blank', rel: 'noopener' } })
    .render(message.text);

  return (
    <div className={`rcw-${message.sender}`}>
      <div className="rcw-message-text" dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
      <span className="rcw-timestamp">{format(message.timestamp, 'hh:mm')}</span>
    </div>
  );
}

export default Message;
