import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import assetMock from '../../../../mocks/fileMock';

import Widget from '../index';
import WidgetLayout from '../layout';

configure({ adapter: new Adapter() });

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));

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
  const defaultProps = {
    title: 'Welcome',
    subtitle: 'This is your chat subtitle',
    senderPlaceHolder: 'Type a message...',
    showCloseButton: true,
    fullScreenMode: false,
    autofocus: true,
    chatId: 'rcw-chat-container',
    launcherOpenLabel: 'Open chat',
    launcherCloseLabel: 'Close chat',
    sendButtonAlt: 'Send',
    showTimeStamp: true
  };

  // @ts-ignore
  const widgetComponent = shallow<Widget>(
    <Widget
      {...defaultProps}
      handleNewUserMessage={handleUserMessage}
      profileAvatar={profile}
    />
  );

  it('should render WidgetLayout', () => {
    expect(widgetComponent.find(WidgetLayout)).toHaveLength(1);
  });

  it('should prevent events default behavior', () => {
    const spyPreventDefault = jest.spyOn(newMessageEvent, 'preventDefault');
    console.log(widgetComponent.props())
    widgetComponent.props().onSendMessage(newMessageEvent);
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
