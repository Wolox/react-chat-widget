import React from 'react';
import markdownIt from 'markdown-it';
import markdownItSup from 'markdown-it-sup';
import markdownItSanitizer from 'markdown-it-sanitizer';
import markdownItLinkAttributes from 'markdown-it-link-attributes';

import './styles.scss';

// TODO: add prop types
function Message(props: any) {
  const sanitizedHTML = markdownIt()
  .use(markdownItSup)
  .use(markdownItSanitizer)
  .use(markdownItLinkAttributes, { attrs: { target: '_blank', rel: 'noopener' } })
  .render(props.message.text);

  return (
    <div className={`rcw-${props.message.sender}`}>
      <div className="rcw-message-text" dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
    </div>
  );
}

export default Message;
