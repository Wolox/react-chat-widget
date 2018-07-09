import React from 'react';
import { List } from 'immutable';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { createNewMessage, createLinkSnippet, createComponentMessage } from '@utils/messages';

import Messages from '../index';
import Message from '../components/Message';
import Snippet from '../components/Snippet';

configure({ adapter: new Adapter() });

describe('<Messages />', () => {
  const message = createNewMessage('Response message 1');
  const linkSnippet = createLinkSnippet({ title: 'link', link: 'link' });
  /* eslint-disable react/prop-types */
  const Dummy = ({ text }) => <div>{text}</div>;
  /* eslint-enable */
  const customComp = createComponentMessage(Dummy, { text: 'This is a Dummy Component!' });

  const responseMessages = List([message, linkSnippet, customComp]);

  const messagesComponent = shallow(
    <Messages.WrappedComponent
      messages={responseMessages}
    />
  );

  it('should render a Message component', () => {
    expect(messagesComponent.find(Message)).toHaveLength(1);
  });

  it('should render a Snippet component', () => {
    expect(messagesComponent.find(Snippet)).toHaveLength(1);
  });

  it('should reder a custom component', () => {
    expect(messagesComponent.find(Dummy)).toHaveLength(1);
  });
});
