import React from 'react';
import PropTypes from 'prop-types';

import close from 'assets/clear-button.svg';
import './style.scss';

const Header = ({ title, subtitle, toggleChat }) =>
  <div className="header">
    <button className="close-button" onClick={toggleChat}>
      <img src={close} className="close" alt="" />
    </button>
    <h4 className="title">{title}</h4>
    <span>{subtitle}</span>
  </div>;

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  toggleChat: PropTypes.func
};

export default Header;
