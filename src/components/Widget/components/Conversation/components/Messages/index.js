import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { MESSAGE_SENDER } from 'constants';

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

  getComponentToRender = (message) => {
    const CompToRender = message.get('component');
    if (message.get('type') === 'component') {
      return <CompToRender {...message.get('props')} />;
    }
    const props = { message };
    return <CompToRender {...props} />;
  };

  render() {
    return (
      <div id="messages" className="messages-container">
        {this.props.messages.map((message, index) =>
          <div className="message" key={index}>
            {isResponse(message.get('sender')) &&
              <img src={this.props.profileAvatar} className="avatar" alt="profile" />
            }
            { this.getComponentToRender(message) }
          </div>
        )}
      </div>
    );
  }
}

Messages.propTypes = {
  messages: ImmutablePropTypes.listOf(ImmutablePropTypes.map),
  profileAvatar: PropTypes.string
};

export default connect(store => ({
  messages: store.messages
}))(Messages);
