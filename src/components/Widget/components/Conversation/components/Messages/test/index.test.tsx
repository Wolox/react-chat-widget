import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { Provider } from 'react-redux';
import { MessageOrigin } from '../../../../../../../constants';
import { createComponentMessage, createLinkSnippet, createNewMessage } from '../../../../../../../utils/messages';
import { createMockStore } from '../../../../../../../utils/store';
import Message from '../components/Message';
import Snippet from '../components/Snippet';
import Messages from '../index';


configure({ adapter: new Adapter() });

describe('<Messages />', () => {

  /* eslint-disable react/prop-types */
  const Dummy = ({ text }) => <div>{text}</div>;
  /* eslint-enable */
  const customComp = createComponentMessage(Dummy, { text: 'This is a Dummy Component!' }, false);
  const message = createNewMessage('Response message 1', MessageOrigin.client);
  const linkSnippet = createLinkSnippet({ title: 'link', link: 'link' });
  const mockStore = createMockStore({ messages: { messages: [message, linkSnippet, customComp], badgeCount: 0 } })

  const messagesComponent = mount(
    <Provider store={mockStore}>
      <Messages showTimeStamp timestampFormat="hh:mm" />
    </Provider>
  );

  it('should render a Message component', () => {
    expect(messagesComponent.find(Message)).toHaveLength(1);
  });

  it('should render a Snippet component', () => {
    expect(messagesComponent.find(Snippet)).toHaveLength(1);
  });

  it('should render a custom component', () => {
    expect(messagesComponent.find(Dummy)).toHaveLength(1);
  });
});
