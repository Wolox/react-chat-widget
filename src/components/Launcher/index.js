import React from 'react';
import PropTypes from 'prop-types';
import openLauncher from '../../../assets/launcher_button.svg';
import close from '../../../assets/clear-button.svg';
import './style.scss';

const Launcher = ({ toggle, chatOpened, styles }) =>
  <button type="button" style={styles} className="launcher" onClick={toggle}>
    {chatOpened ?
      <img src={close} className="close-launcher" alt="" /> :
      <img src={openLauncher} className="open-launcher" alt="" />
    }
  </button>;

Launcher.propTypes = {
  toggle: PropTypes.func,
  chatOpened: PropTypes.bool,
  styles: PropTypes.object // eslint-disable-line
};

export default Launcher;
