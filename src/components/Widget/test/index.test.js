import { configure, mount } from 'enzyme';
import { Provider } from 'react-redux'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import assetMock from '../../../../mocks/fileMock';
import { createMockStore } from '../../../utils/store'
import Widget from '../index';
import WidgetLayout from '../layout';

configure({ adapter: new Adapter() });

const mockStore =  createMockStore()

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

  const widgetComponent = mount(
    <Provider store={ mockStore }>
      <Widget handleNewUserMessage={handleUserMessage} profileAvatar={profile} />
    </Provider>
  )

  it('should render WidgetLayout', () => {
    expect(widgetComponent.find(WidgetLayout)).toHaveLength(1);
  });

  it('should prevent events default behavior', () => {
    const spyPreventDefault = jest.spyOn(newMessageEvent, 'preventDefault');
    widgetComponent.find(WidgetLayout).prop('onSendMessage')(newMessageEvent)
    expect(spyPreventDefault).toHaveBeenCalled()
    
  });

  it('should call prop when calling newMessageEvent', () => {
    widgetComponent.find(WidgetLayout).prop('onSendMessage')(newMessageEvent);
    expect(handleUserMessage).toBeCalled();
  });

  it('should clear the message input when newMessageEvent', () => {
    widgetComponent.find(WidgetLayout).prop('onSendMessage')(newMessageEvent);
    expect(newMessageEvent.target.message.value).toBe('');
  });
});
