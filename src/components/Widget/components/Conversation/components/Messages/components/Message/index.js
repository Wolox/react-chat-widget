import React, { PureComponent } from 'react';
import markdownIt from 'markdown-it';
import markdownItSup from 'markdown-it-sup';
import markdownItSanitizer from 'markdown-it-sanitizer';
import markdownItLinkAttributes from 'markdown-it-link-attributes';

import { PROP_TYPES } from '@constants';

import './styles.scss';

class Message extends PureComponent {
  render() {
    const sanitizedHTML = markdownIt()
    .use(markdownItSup)
    .use(markdownItSanitizer)
    .use(markdownItLinkAttributes, { attrs: { target: '_blank', rel: 'noopener' } })
    .render(this.props.message.get('text'));

    return (
      <div className={`rcw-${this.props.message.get('sender')}`}>
        <div className="rcw-message-text" dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
      </div>
    );
  }
}

Message.propTypes = {
  message: PROP_TYPES.MESSAGE
};

export default Message;
