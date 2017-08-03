import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Presentation = props =>
  <div className="presentation">
    <h4 className="title">{props.title}</h4>
    <span>{props.subtitle}</span>
  </div>;

Presentation.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default Presentation;
