import React, { Component } from 'react';
import { connect } from 'react-redux';

import { hideAvatar } from '../../../../../../store/actions';
import { scrollToBottom } from '../../../../../../utils/messages';

import Loader from './components/Loader';
import './styles.scss';

class Messages extends Component {
  componentDidMount() {
    scrollToBottom(this.$message);
  }

  componentDidUpdate() {
    scrollToBottom(this.$message);
  }

  $message = null;

  getComponentToRender = message => {
    const ComponentToRender = message.component;
    if (message.type === 'component') {
      return <ComponentToRender {...message.props} />;
    }
    return <ComponentToRender message={message} />;
  };

  shouldRenderAvatar = (message, index) => {
    const previousMessage = this.props.messages[index - 1];
    if (message.showAvatar && previousMessage.showAvatar) {
      this.props.dispatch(hideAvatar(index));
    }
  }

  render() {
    const { messages, profileAvatar, typing } = this.props;
    return (
      <div id="messages" className="rcw-messages-container" ref={msg => this.$message = msg}>
        {messages.map((message, index) =>
          <div className="rcw-message" key={index}>
            {profileAvatar &&
              message.showAvatar &&
              <img src={profileAvatar} className="rcw-avatar" alt="profile" />
            }
            {this.getComponentToRender(message)}
          </div>
        )}
        <Loader typing={typing} />
      </div>
    );
  }
}

export default connect(store => ({
  messages: store.messages,
  typing: store.behavior.get('msgLoader')
}))(Messages);
