import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';

import Messages from '../index';
import Message from '../components/Message';
import Snippet from '../components/Snippet';

describe('<Messages />', () => {
  const responseMessages = [
    {
      text: 'Response message 1',
      type: 'text',
      timestamp: moment().format(),
      sender: 'response'
    }, {
      title: 'Link title',
      link: 'link',
      type: 'link',
      timestamp: moment().format()
    }
  ];

  const messagesComponent = shallow(
    <Messages
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
