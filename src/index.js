import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import Widget from './components/Widget';
import store from '../src/store/store';

const ConnectedWidget = props =>
  <Provider store={store}>
    <Widget
      handleNewUserMessage={props.handleNewUserMessage}
      profileAvatar={props.profileAvatar}
    />
  </Provider>;

ConnectedWidget.propTypes = {
  handleNewUserMessage: PropTypes.func.isRequired,
  profileAvatar: PropTypes.string
};

export default ConnectedWidget;
