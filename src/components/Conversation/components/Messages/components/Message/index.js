import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Message = props =>
  <div className="message">
    <div className={`${props.messageType}`}>
      {props.profileImage ?
        <img src={props.profileImage} alt="profile" /> :
        null
      }
      <span className="message-text">
        {props.text}
      </span>
    </div>
  </div>;

Message.propTypes = {
  text: PropTypes.string.isRequired,
  messageType: PropTypes.string.isRequired,
  profileImage: PropTypes.string
};

export default Message;
