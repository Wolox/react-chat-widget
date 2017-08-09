import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Message from './components/Message';
import Snippet from './components/Snippet';
import { MESSAGES_TYPES } from '../../../../constants';
import './styles.scss';

class Messages extends Component {
  componentDidUpdate() {
    const objDiv = document.getElementById('messages');
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  render() {
    return (
      <div id="messages" className="messages-container">
        {this.props.messages.map((message, index) =>
          message.type === MESSAGES_TYPES.TEXT ?
            <Message
              key={index}
              message={message}
              styles={this.props.messageStyles}
            /> :
            <Snippet
              key={index}
              snippet={message}
              styles={this.props.snippetStyles}
            />
        )}
      </div>
    );
  }
}

Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
  messageStyles: PropTypes.object, // eslint-disable-line
  snippetStyles: PropTypes.object // eslint-disable-line
};

export default Messages;
