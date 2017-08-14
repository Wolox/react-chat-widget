import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { PROP_TYPES } from '../../../../../../constants';
import './styles.scss';

class Message extends PureComponent {
  render() {
    return (
      <div className="message">
        <div className={`${this.props.message.sender}`} style={this.props.styles}>
          {this.props.profileImage &&
            <img src={this.props.profileImage} alt="profile" />
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
  message: PROP_TYPES.MESSAGE,
  profileImage: PropTypes.string,
  styles: PropTypes.object // eslint-disable-line
};

export default Message;
