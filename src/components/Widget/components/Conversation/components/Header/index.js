import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Header = ({ title, subtitle, styles }) =>
  <div style={styles} className="header">
    <h4 className="title">{title}</h4>
    <span>{subtitle}</span>
  </div>;

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  styles: PropTypes.object // eslint-disable-line
};

export default Header;
