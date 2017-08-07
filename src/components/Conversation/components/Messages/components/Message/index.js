import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { MESSAGE_SENDER, MESSAGES_TYPES } from '../../../../../../constants';
import './styles.scss';

class Message extends PureComponent {
  render() {
    return (
      <div className="message">
        <div className={`${this.props.message.sender}`}>
          {this.props.profileImage ?
            <img src={this.props.profileImage} alt="profile" /> :
            null
          }
          <span className="message-text">
            {this.props.message.text}
          </span>
        </div>
      </div>
    );
  }
}

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
  }),
  profileImage: PropTypes.string
};

export default Message;
