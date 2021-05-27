import { mount, configure } from 'enzyme';
import { Provider } from 'react-redux'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { createNewMessage, createLinkSnippet, createComponentMessage } from '../../../../../../../utils/messages';
import { createMockStore } from '../../../../../../../utils/store';

import Messages from '../index';
import Message from '../components/Message';
import Snippet from '../components/Snippet';

configure({ adapter: new Adapter() });

describe('<Messages />', () => {
  
  /* eslint-disable react/prop-types */
  const Dummy = ({ text }) => <div>{text}</div>;
  /* eslint-enable */
  const customComp = createComponentMessage(Dummy, { text: 'This is a Dummy Component!' });
  const message = createNewMessage('Response message 1');
  const linkSnippet = createLinkSnippet({ title: 'link', link: 'link' });
  const mockStore =  createMockStore({ messages: {messages: [message, linkSnippet, customComp], badgeCount: 0 }})

  const messagesComponent = mount(
    <Provider store={ mockStore }>
       <Messages />
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
