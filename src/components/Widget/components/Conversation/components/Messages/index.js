import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { MESSAGES_TYPES, MESSAGE_SENDER } from 'constants';

import Message from './components/Message';
import Snippet from './components/Snippet';
import './styles.scss';

const isResponse = sender => sender === MESSAGE_SENDER.RESPONSE;

const scrollToBottom = () => {
  const messagesDiv = document.getElementById('messages');
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
};

class Messages extends Component {
  componentDidMount() {
    scrollToBottom();
  }

  componentDidUpdate() {
    scrollToBottom();
  }

  render() {
    return (
      <div id="messages" className="messages-container" style={this.props.containerStyles}>
        {this.props.messages.map((message, index) =>
          <div className="message" key={index}>
            {isResponse(message.sender) &&
              <img src={this.props.profileAvatar} className="avatar" alt="profile" style={this.props.avatarStyles} />
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
                messageStyle={this.props.responsesStyles}
              />
            }
          </div>
        )}
      </div>
    );
  }
}

Messages.propTypes = {
  messages: ImmutablePropTypes.listOf(ImmutablePropTypes.map),
  profileAvatar: PropTypes.string,
  avatarStyles: PropTypes.object, // eslint-disable-line
  messageStyles: PropTypes.object, // eslint-disable-line
  containerStyles: PropTypes.object, // eslint-disable-line
  responsesStyles: PropTypes.object, // eslint-disable-line
  snippetStyles: PropTypes.object // eslint-disable-line
};

export default connect(store => ({
  messages: store.messages.get('messages')
}))(Messages);
