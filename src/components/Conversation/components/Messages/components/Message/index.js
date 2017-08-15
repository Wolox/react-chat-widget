import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { PROP_TYPES } from 'constants';
import './styles.scss';

class Message extends PureComponent {
  render() {
    return (
      <div className={`${this.props.message.sender}`} style={this.props.styles}>
        <span className="message-text">
          {this.props.message.text}
        </span>
      </div>
    );
  }
}

Message.propTypes = {
  message: PROP_TYPES.MESSAGE,
  styles: PropTypes.object // eslint-disable-line
};

export default Message;
