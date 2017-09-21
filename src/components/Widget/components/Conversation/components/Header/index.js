import React from 'react';
import PropTypes from 'prop-types';

import close from 'assets/clear-button.svg';
import './style.scss';

const Header = ({ title, subtitle, toggleChat, showCloseButton }) =>
  <div className="header">
    {
      showCloseButton &&
      <button className="close-button" onClick={toggleChat}>
        <img src={close} className="close" alt="close" />
      </button>
    }
    <h4 className="title">{title}</h4>
    <span>{subtitle}</span>
  </div>;

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  toggleChat: PropTypes.func,
  showCloseButton: PropTypes.bool
};

export default Header;
