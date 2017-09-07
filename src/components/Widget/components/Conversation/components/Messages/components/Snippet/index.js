import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { PROP_TYPES } from 'constants';
import './styles.scss';

class Snippet extends PureComponent {
  render() {
    return (
      <div className="snippet" style={this.props.messageStyle}>
        <h5 className="snippet-title">
          {this.props.snippet.get('title')}
        </h5>
        <div className="snippet-details" style={this.props.styles.info}>
          <a href={this.props.snippet.get('link')} className="link">
            {this.props.snippet.get('link')}
          </a>
        </div>
      </div>
    );
  }
}

Snippet.propTypes = {
  snippet: PROP_TYPES.SNIPPET,
  styles: PropTypes.object, // eslint-disable-line
  messageStyle: PropTypes.object // eslint-disable-line
};

export default Snippet;
