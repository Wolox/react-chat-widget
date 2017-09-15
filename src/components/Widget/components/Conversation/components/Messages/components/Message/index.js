import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';

import { PROP_TYPES } from 'constants';
import './styles.scss';

class Message extends PureComponent {
  render() {
    const sanitizedHTML = marked.parse(this.props.message.get('text'), { sanitize: true });

    return (
      <div className={this.props.message.get('sender')} style={this.props.styles}>
        <div className="message-text" dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
      </div>
    );
  }
}

Message.propTypes = {
  message: PROP_TYPES.MESSAGE,
  styles: PropTypes.object // eslint-disable-line
};

export default Message;
