import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import openLauncher from '@assets/chotaAira.png';
import close from '@assets/clear-button.svg';
import Badge from './components/Badge';
import './style.scss';

const Launcher = ({ toggle, chatOpened, badge }) =>
  <button type="button" className={chatOpened ? 'rcw-launcher rcw-hide-sm' : 'rcw-launcher'} onClick={toggle}>
    <Badge badge={badge} />
    {chatOpened ?
      <span>
        <img src={close} className="rcw-close-launcher" alt="" />
      </span> :
      <span>
        <img src={openLauncher} className="rcw-open-launcher" alt="" />
        <span>Chat with Us</span>
      </span> 
      
    }
  </button>
  ;

Launcher.propTypes = {
  toggle: PropTypes.func,
  chatOpened: PropTypes.bool,
  badge: PropTypes.number
};

export default connect(store => ({
  chatOpened: store.behavior.get('showChat')
}))(Launcher);
