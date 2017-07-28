import React from 'react';
import PropTypes from 'prop-types';

const Message = props =>
  <div>
    {props.profileImage ?
      <img src={props.profileImage} alt="profile" /> :
      null
    }
    <span style={props.messageType}>
      {props.message}
    </span>
  </div>;

Message.propTypes = {
  message: PropTypes.string.isRequired,
  messageType: PropTypes.string.isRequired,
  profileImage: PropTypes.string
};

export default Message;
