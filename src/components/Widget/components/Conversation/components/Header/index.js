import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Header = ({ title, subtitle }) =>
  <div className="header">
    <h4 className="title">{title}</h4>
    <span>{subtitle}</span>
  </div>;

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default Header;
