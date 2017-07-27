import React from 'react';
import PropTypes from 'prop-types';

const Drawer = props =>
  <button type="button" onClick={props.toggle}>Toggle Chat</button>;

Drawer.propTypes = {
  toggle: PropTypes.func
};

export default Drawer;
