import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Badge from './components/Badge'

import openLauncher from 'assets/launcher_button.svg';
import close from 'assets/clear-button.svg';
import './style.scss';

const Launcher = ({ toggle, chatOpened, badge }) =>
  <button type="button" className={chatOpened ? 'launcher hide-sm' : 'launcher'} onClick={toggle}>
    <Badge badge ={badge} />
    {
      chatOpened ?
        <img src={close} className="close-launcher" alt="" /> :
        <img src={openLauncher} className="open-launcher" alt="" />
    }
  </button>;

Launcher.propTypes = {
  toggle: PropTypes.func,
  chatOpened: PropTypes.bool,
  badge: PropTypes.number
};

export default connect(store => ({
  chatOpened: store.behavior.get('showChat')
}))(Launcher);
