import React from 'react';
import PropTypes from 'prop-types';

const Presentation = props =>
  <div>
    <h4>{props.title}</h4>
    <span>{props.subtitle}</span>
  </div>;

Presentation.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default Presentation;
