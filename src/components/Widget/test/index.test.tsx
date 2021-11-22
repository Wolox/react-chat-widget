import React from 'react';
import { configure, mount } from 'enzyme';
import { Provider } from 'react-redux'
import Adapter from 'enzyme-adapter-react-16';

import assetMock from '../../../../mocks/fileMock';
import { createMockStore } from '../../../utils/store'
import Widget from '../index';
import WidgetLayout from '../layout';

configure({ adapter: new Adapter() });

const mockStore = createMockStore()

describe('<Widget />', () => {
  const profile = assetMock;
  const handleUserMessage = jest.fn();

  const widgetComponent = mount(
    <Provider store={mockStore}>
      <Widget
        handleNewUserMessage={handleUserMessage}
        profileAvatar={profile}
        title='Welcome'
        subtitle='This is your chat subtitle'
        senderPlaceHolder='Type a message...'
        showCloseButton={true}
        fullScreenMode={false}
        autofocus={true}
        chatId='rcw-chat-container'
        launcherOpenLabel='Open chat'
        launcherCloseLabel='Close chat'
        launcherOpenImg=''
        launcherCloseImg=''
        sendButtonAlt='Send'
        showTimeStamp={true}
        imagePreview={false}
        zoomStep={80}
        showBadge={true}
        timestampFormat="hh:mm" />
    </Provider>
  )

  it('should render WidgetLayout', () => {
    expect(widgetComponent.find(WidgetLayout)).toHaveLength(1);
  });


});
