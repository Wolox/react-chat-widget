import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Header = props =>
  <div className="presentation">
    <h4 className="title">{props.title}</h4>
    <span>{props.subtitle}</span>
  </div>;

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default Header;
