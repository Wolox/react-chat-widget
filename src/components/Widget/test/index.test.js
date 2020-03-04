import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import assetMock from '@tests-mocks/fileMock';
import Widget from '../index';
import WidgetLayout from '../layout';
import { ADD_NEW_USER_MESSAGE } from '../../../store/actions/actionTypes'

configure({ adapter: new Adapter() });

describe('<Widget />', () => {
  const profile = assetMock;
  const handleUserMessage = jest.fn();

  const createNewMessageEvent = (message) => ({
    target: {
      message: {
        value: message
      }
    },
    preventDefault() {}
  });

  const newMessageEvent = createNewMessageEvent('new message')

  const dispatch = jest.fn();

  const createWidget = (autoAddUserMessage = true) => shallow(
    <Widget.WrappedComponent
      handleNewUserMessage={handleUserMessage}
      profileAvatar={profile}
      dispatch={dispatch}
      autoAddUserMessage={autoAddUserMessage}
    />
  );

  const widgetComponent = createWidget()

  const manualWidgetComponent = createWidget(false)

  beforeEach(() => {
    dispatch.mockReset()
  });

  it('should render WidgetLayout', () => {
    expect(widgetComponent.find(WidgetLayout)).toHaveLength(1);
  });

  it('should prevent events default behavior', () => {
    const spyPreventDefault = jest.spyOn(newMessageEvent, 'preventDefault');
    widgetComponent.instance().handleMessageSubmit(newMessageEvent);
    expect(spyPreventDefault).toHaveBeenCalled();
  });

  it('should dispatch a user message', () => {
    const text = 'test message'
    const message = createNewMessageEvent(text)
    widgetComponent.instance().handleMessageSubmit(message);

    expect(dispatch.mock.calls.length).toBe(1);
    const call = dispatch.mock.calls[0][0]
    expect(call.type).toBe(ADD_NEW_USER_MESSAGE);
    expect(call.text).toBe(text)
  });

  it('should not dispatch a user message when disabled', () => {
    const text = 'test message'
    const message = createNewMessageEvent(text)
    manualWidgetComponent.instance().handleMessageSubmit(message);

    expect(dispatch.mock.calls.length).toBe(0);
  });

  it('should call prop when calling newMessageEvent', () => {
    widgetComponent.instance().handleMessageSubmit(newMessageEvent);
    expect(handleUserMessage).toBeCalled();
  });

  it('should clear the message input when newMessageEvent', () => {
    widgetComponent.instance().handleMessageSubmit(newMessageEvent);
    expect(newMessageEvent.target.message.value).toBe('');
  });
});
