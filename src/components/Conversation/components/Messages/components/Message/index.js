import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Message = ({ message }) =>
  <div className="message">
    <div className={`${message.messageSender}`}>
      {message.profileImage ?
        <img src={message.profileImage} alt="profile" /> :
        null
      }
      <span className="message-text">
        {message.text}
      </span>
    </div>
  </div>;

Message.propTypes = {
  message: PropTypes.shape({
    messageType: PropTypes.oneOf([
      MESSAGES_TYPES.TEXT,
      MESSAGES_TYPES.SNIPPET.LINK
    ]),
    text: PropTypes.string,
    timestamp: PropTypes.string
  })
};

export default Message;
