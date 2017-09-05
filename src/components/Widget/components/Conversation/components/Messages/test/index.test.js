import React from 'react';
import { List } from 'immutable';
import { shallow } from 'enzyme';

import Messages from '../index';
import Message from '../components/Message';
import Snippet from '../components/Snippet';
import { createNewMessage, createLinkSnippet } from '../../../../../../../store/reducers/helper';

describe('<Messages />', () => {
  const message = createNewMessage('Response message 1');
  const link = { title: 'link', link: 'link' };
  const linkSnippet = createLinkSnippet(link);

  const responseMessages = List([message, linkSnippet]);

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
});
