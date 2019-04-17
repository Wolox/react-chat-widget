import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import openLauncher from '@assets/launcher_button.svg';
import close from '@assets/clear-button.svg';
import Badge from './components/Badge';
import './style.scss';

const Launcher = ({
  chatId,
  toggle,
  chatOpened,
  badge,
  launcherOpenLabel,
  launcherCloseLabel,
}) => (
  <button
    type="button"
    className={chatOpened ? 'rcw-launcher rcw-hide-sm' : 'rcw-launcher'}
    onClick={toggle}
    aria-controls={chatId}>
    <Badge badge={badge} />
    {chatOpened ? (
      <img
        src={close}
        className="rcw-close-launcher"
        alt={launcherCloseLabel}
      />
    ) : (
      <img
        src={openLauncher}
        className="rcw-open-launcher"
        alt={launcherOpenLabel}
      />
    )}
  </button>
);

Launcher.propTypes = {
  chatId: PropTypes.string,
  toggle: PropTypes.func,
  chatOpened: PropTypes.bool,
  badge: PropTypes.number,
  launcherOpenLabel: PropTypes.string,
  launcherCloseLabel: PropTypes.string,
};

export default connect(store => ({
  chatOpened: store.behavior.get('showChat')
}))(Launcher);
