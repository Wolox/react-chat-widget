import React from 'react';
import { shallow } from 'enzyme';

import { createNewMessage } from 'helper';
import Message from '../index';

describe('<Message />', () => {
  /* eslint-disable no-underscore-dangle */
  const createMessageComponent = message => shallow(<Message message={message} />);

  it('should render a <strong> element', () => {
    const message = createNewMessage('New message with **Markdown**!');
    const messageComponent = createMessageComponent(message);
    expect(messageComponent.find('.message-text').getNode().props.dangerouslySetInnerHTML.__html).toMatchSnapshot();
  });

  it('should reder a <em> element', () => {
    const message = createNewMessage('New message with *Markdown*!');
    const messageComponent = createMessageComponent(message);
    expect(messageComponent.find('.message-text').getNode().props.dangerouslySetInnerHTML.__html).toMatchSnapshot();
  });
  /* eslint-enable */
});
