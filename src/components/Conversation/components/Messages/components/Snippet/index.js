import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { MESSAGE_SENDER, MESSAGES_TYPES } from '../../../../../../constants';
import './styles.scss';

class Snippet extends PureComponent {
  render() {
    return (
      <div className="snippet">
        <h5 className="snippet-title">
          {this.props.snippet.title}
        </h5>
        <div className="snippet-details" style={this.props.styles ? this.props.styles.info : {}}>
          <a href={this.props.snippet.link} className="link">
            {this.props.snippet.link}
          </a>
        </div>
      </div>
    );
  }
}

Snippet.propTypes = {
  snippet: PropTypes.shape({
    type: PropTypes.oneOf([
      MESSAGES_TYPES.TEXT,
      MESSAGES_TYPES.SNIPPET.LINK
    ]),
    title: PropTypes.string,
    link: PropTypes.string,
    timestamp: PropTypes.string,
    sender: PropTypes.oneOf([
      MESSAGE_SENDER.CLIENT,
      MESSAGE_SENDER.RESPONSE
    ])
  }),
  styles: PropTypes.object // eslint-disable-line
};

export default Snippet;
