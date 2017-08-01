import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Launcher = props =>
  <button type="button" className="launcher" onClick={props.toggle} />;

Launcher.propTypes = {
  toggle: PropTypes.func,
  chatOpened: PropTypes.bool
};

export default Launcher;
