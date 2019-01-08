import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';

import { hideAvatar } from '@actions';

import './styles.scss';

let prevMessageContainerScrollHeight = 0;

function sinEaseOut(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b;
}

function scrollWithSlowMotion(target, scrollStart, scroll) {
  const raf = window.webkitRequestAnimationFrame || window.requestAnimationFrame
  let start = null
  const step = (timestamp) => {
    if (!start) {
      start = timestamp
    }
    let stepScroll = sinEaseOut(timestamp - start, 0, scroll, 400)
    let total = scrollStart + stepScroll
    target.scrollTop = total;
    if (total < scrollStart + scroll) {
      raf(step)
    }
  }
  raf(step)
}

const scrollToBottom = () => {
  const messagesDiv = document.getElementById('messages');
  if (!messagesDiv) return;
  const screenHeight = messagesDiv.clientHeight;
  const contentHeight = messagesDiv.scrollHeight;
  let scrollOffset = 0;
  if (contentHeight > screenHeight) {
    scrollOffset = contentHeight - (
      prevMessageContainerScrollHeight < screenHeight ? screenHeight : prevMessageContainerScrollHeight
    )
    if (!scrollOffset) {
      scrollOffset = contentHeight - screenHeight
    }
  }
  const scrollTop = messagesDiv.scrollTop;

  const runOffset = messagesDiv.scrollHeight - (scrollTop + screenHeight)

  if (runOffset > 0) {
    // When the two messages respond at close intervals, resulting in a scroll position error
    scrollOffset += (runOffset - scrollOffset);
  }

  scrollOffset && scrollWithSlowMotion(messagesDiv, scrollTop, scrollOffset);
};

class Messages extends Component {
  componentDidMount() {
    scrollToBottom();
  }

  componentWillUpdate() {
    // Record the height of messages container before updating
    prevMessageContainerScrollHeight = document.getElementById('messages').clientHeight;
  }

  componentDidUpdate() {
    scrollToBottom();
  }

  getComponentToRender = message => {
    const ComponentToRender = message.get('component');
    const previousMessage = this.props.messages.get()
    if (message.get('type') === 'component') {
      return <ComponentToRender {...message.get('props')} />;
    }
    return <ComponentToRender message={message} />;
  };

  shouldRenderAvatar = (message, index) => {
    const previousMessage = this.props.messages.get(index - 1);
    if (message.get('showAvatar') && previousMessage.get('showAvatar')) {
      this.props.dispatch(hideAvatar(index));
    }
  }

  render() {
    const { messages, profileAvatar } = this.props;
    return (
      <div id="messages" className="rcw-messages-container">
        {messages.map((message, index) =>
          <div className="rcw-message" key={index}>
            {profileAvatar &&
              message.get('showAvatar') &&
              <img src={profileAvatar} className="rcw-avatar" alt="profile" />
            }
            {this.getComponentToRender(message)}
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
