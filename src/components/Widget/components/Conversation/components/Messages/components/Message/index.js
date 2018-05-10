import React, { PureComponent } from 'react';
import marked from 'marked';
import { PROP_TYPES } from 'constants';

import './styles.scss';

class Message extends PureComponent {
  render() {
    const sanitizedHTML = marked.parse(this.props.message.get('text'), { sanitize: true, gfm: true, breaks: true });

    return (
      <div className={this.props.message.get('sender')}>
        <div className="message-text" dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
      </div>
    );
  }
}

Message.propTypes = {
  message: PROP_TYPES.MESSAGE
};

export default Message;
