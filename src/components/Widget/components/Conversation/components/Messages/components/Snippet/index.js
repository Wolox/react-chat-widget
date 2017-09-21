import React, { PureComponent } from 'react';
import { PROP_TYPES } from 'constants';

import './styles.scss';

class Snippet extends PureComponent {
  render() {
    return (
      <div className="snippet">
        <h5 className="snippet-title">
          { this.props.message.get('title') }
        </h5>
        <div className="snippet-details">
          <a href={this.props.message.get('link')} className="link">
            { this.props.message.get('link') }
          </a>
        </div>
      </div>
    );
  }
}

Snippet.propTypes = {
  message: PROP_TYPES.SNIPPET
};

export default Snippet;
