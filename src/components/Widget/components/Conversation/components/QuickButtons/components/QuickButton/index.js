import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class QuickButton extends PureComponent {
  render() {
    return (
      <button
        className="quick-button"
        onClick={(event) => this.props.onQuickButtonClicked(event, this.props.button.get('value'))}
      >
        {this.props.button.get('label')}
      </button>
    )
  }
}

QuickButton.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string
};

export default QuickButton;
