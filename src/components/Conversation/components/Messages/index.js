import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Message from './components/Message';
import Snippet from './components/Snippet';
import { MESSAGES_TYPES, MESSAGE_SENDER } from '../../../../constants';
import './styles.scss';

const isResponse = sender => sender === MESSAGE_SENDER.RESPONSE;

class Messages extends Component {
  componentDidUpdate() {
    const messagesDiv = document.getElementById('messages');
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }

  render() {
    return (
      <div id="messages" className="messages-container">
        {this.props.messages.map((message, index) =>
          <div className="message" key={index}>
            {isResponse(message.sender) &&
              <img src={this.props.profileAvatar} className="avatar" alt="profile" />
            }
            {message.type === MESSAGES_TYPES.TEXT ?
              <Message
                message={message}
                styles={
                  isResponse(message.sender) ?
                  this.props.responsesStyles : this.props.messageStyles
                }
                profileAvatar={this.props.profileAvatar}
              /> :
              <Snippet
                snippet={message}
                styles={this.props.snippetStyles}
              />
            }
          </div>
        )}
      </div>
    );
  }
}

Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
  profileAvatar: PropTypes.string,
  messageStyles: PropTypes.object, // eslint-disable-line
  responsesStyles: PropTypes.object, // eslint-disable-line
  snippetStyles: PropTypes.object // eslint-disable-line
};

export default Messages;
