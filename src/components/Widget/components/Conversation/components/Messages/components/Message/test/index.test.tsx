import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { MessageOrigin } from '../../../../../../../../../constants';
import { createNewMessage } from '../../../../../../../../../utils/messages';
import Message from '../index';

configure({ adapter: new Adapter() });

describe('<Message />', () => {
  /* eslint-disable no-underscore-dangle */
  const createMessageComponent = message => shallow(<Message message={message} showTimeStamp timestampFormat="hh:mm" />);

  it('should render a <strong> element', () => {
    const message = createNewMessage('New message with **Markdown**!', MessageOrigin.client);
    const messageComponent = createMessageComponent(message);
    expect(messageComponent.find('.rcw-message-text').getElement().props.dangerouslySetInnerHTML.__html).toMatchSnapshot();
  });

  it('should reder a <em> element', () => {
    const message = createNewMessage('New message with *Markdown*!', MessageOrigin.client);
    const messageComponent = createMessageComponent(message);
    expect(messageComponent.find('.rcw-message-text').getElement().props.dangerouslySetInnerHTML.__html).toMatchSnapshot();
  });
  /* eslint-enable */
});
