import React from 'react';
import PropTypes from 'prop-types';
import { MESSAGE_SENDER, MESSAGES_TYPES } from '../../../../../../constants';
import './styles.scss';

const Message = ({ message }) =>
  <div className="message">
    <div className={`${message.sender}`}>
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
    type: PropTypes.oneOf([
      MESSAGES_TYPES.TEXT,
      MESSAGES_TYPES.SNIPPET.LINK
    ]),
    text: PropTypes.string,
    timestamp: PropTypes.string,
    sender: PropTypes.oneOf([
      MESSAGE_SENDER.CLIENT,
      MESSAGE_SENDER.RESPONSE
    ])
  })
};

export default Message;
