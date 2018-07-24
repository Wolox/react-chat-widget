import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import assetMock from '@tests-mocks/fileMock';
import Widget from '../index';
import WidgetLayout from '../layout';

configure({ adapter: new Adapter() });

describe('<Widget />', () => {
  const profile = assetMock;
  const handleUserMessage = jest.fn();
  const newMessageEvent = {
    target: {
      message: {
        value: 'New message'
      }
    },
    preventDefault() {}
  };
  const dispatch = jest.fn();

  const widgetComponent = shallow(
    <Widget.WrappedComponent
      handleNewUserMessage={handleUserMessage}
      profileAvatar={profile}
      dispatch={dispatch}
    />
  );

  it('should render WidgetLayout', () => {
    expect(widgetComponent.find(WidgetLayout)).toHaveLength(1);
  });

  it('should prevent events default behavior', () => {
    const spyPreventDefault = jest.spyOn(newMessageEvent, 'preventDefault');
    widgetComponent.instance().handleMessageSubmit(newMessageEvent);
    expect(spyPreventDefault).toHaveBeenCalled();
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
