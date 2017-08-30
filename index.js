import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import Widget from './src';
import store from './src/store/store';

const FullWidget = props =>
  <Provider store={store}>
    <Widget
      responseMessages={props.responseMessages}
      handleNewUserMessage={props.handleNewUserMessage}
    />
  </Provider>;

FullWidget.propTypes = {
  responseMessages: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleNewUserMessage: PropTypes.func.isRequired
};

export default FullWidget;
