import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';

import assetMock from 'tests-mocks/fileMock';
import Widget from '../index';
import WidgetLayout from '../layout';


describe('<Widget />', () => {
  const profile = assetMock;
  const handleUserMessage = jest.fn();
  const responseMessages = [];
  const newMessageEvent = {
    target: {
      message: {
        value: 'New message'
      }
    },
    preventDefault() {}
  };
  const newResponseMessage = [
    {
      text: 'Response message',
      type: 'text',
      timestamp: moment().format()
    }
  ];

  const widgetComponent = shallow(
    <Widget
      responseMessages={responseMessages}
      handleNewUserMessage={handleUserMessage}
      profileAvatar={profile}
    />
  );

  afterEach(() => {
    widgetComponent.setState({
      messages: []
    });
  });

  it('should render WidgetLayout', () => {
    expect(widgetComponent.find(WidgetLayout)).toHaveLength(1);
  });

  it('should toggle chat to show the conversation', () => {
    widgetComponent.instance().toggleConversation();
    expect(widgetComponent.state('showChat')).toEqual(true);
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

  it('should not add a new message to the state when message is empty', () => {
    const anotherMessageEvent = newMessageEvent;
    anotherMessageEvent.target.message.value = '';
    widgetComponent.instance().handleMessageSubmit(anotherMessageEvent);
    expect(widgetComponent.state('messages').length).toBe(0);
  });

  it('should call mergeMessages when component will receive props', () => {
    widgetComponent.instance().mergeMessages = jest.fn();
    widgetComponent.instance().componentWillReceiveProps({ responseMessages: newResponseMessage });
    expect(widgetComponent.instance().mergeMessages).toBeCalled();
  });
});
