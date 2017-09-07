import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { PROP_TYPES } from 'constants';

import Widget from './components/Widget';
import store from '../src/store/store';

const ConnectedWidget = props =>
  <Provider store={store}>
    <Widget
      title={props.title}
      subtitle={props.subtitle}
      handleNewUserMessage={props.handleNewUserMessage}
      senderPlaceHolder={props.senderPlaceHolder}
      stylesInjected={props.stylesInjected}
      profileAvatar={props.profileAvatar}
    />
  </Provider>;

ConnectedWidget.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  handleNewUserMessage: PropTypes.func.isRequired,
  senderPlaceHolder: PropTypes.string,
  stylesInjected: PROP_TYPES.STYLES,
  profileAvatar: PropTypes.string
};

export default ConnectedWidget;
