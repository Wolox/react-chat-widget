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

  // TODO: doesn't call mock method
  // it('should call pushNewUserMessage when handleMessage is called with no empty value', () => {
  //   widgetComponent.instance().pushNewUserMessage = jest.fn();
  //   widgetComponent.instance().handleMessageSubmit(newMessageEvent);
  //   expect(widgetComponent.instance().pushNewUserMessage).toBeCalled();
  // });

  it('should change component state and call prop when calling newMessageEvent', () => {
    widgetComponent.instance().handleMessageSubmit(newMessageEvent);
    expect(widgetComponent.state('messages').length).toBe(1);
    expect(handleUserMessage).toBeCalled();
  });

  it('should not add a new message to the state and not call the prop when message is empty', () => {
    newMessageEvent.target.message.value = '';
    widgetComponent.instance().handleMessageSubmit(newMessageEvent);
    expect(widgetComponent.state('messages').length).toBe(1);
    expect(newMessageEvent.target.message.value).toBeFalsy();
    expect(handleUserMessage).not.toBeCalled();
  });

  it('should call mergeMessages when component will receive props', () => {
    widgetComponent.instance().componentWillReceiveProps(newResponseMessage);
    const spyMergeMessages = jest.spyOn(widgetComponent.instance(), 'mergeMessages');
    expect(spyMergeMessages).toBeCalled();
  });
});
