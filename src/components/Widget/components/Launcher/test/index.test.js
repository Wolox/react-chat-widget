import React from 'react';
import { shallow } from 'enzyme';

import Launcher from '../index';

describe('<Launcher />', () => {
  const createMessageComponent = ({ toggle, chatOpened }) =>
    shallow(<Launcher.WrappedComponent
      toggle={toggle}
      chatOpened={chatOpened}
    />);

  it('should call toggle prop when clicked', () => {
    const toggle = jest.fn();
    const chatOpened = false;
    const launcherComponent = createMessageComponent({ toggle, chatOpened });
    launcherComponent.find('.launcher').simulate('click');
    expect(toggle).toBeCalled();
  });

  it('should render the open-launcher image when chatOpened = false', () => {
    const toggle = jest.fn();
    const chatOpened = false;
    const launcherComponent = createMessageComponent({ toggle, chatOpened });
    expect(launcherComponent.find('.open-launcher')).toHaveLength(1);
  });

  it('should render the close-launcher image when chatOpened = true', () => {
    const toggle = jest.fn();
    const chatOpened = true;
    const launcherComponent = createMessageComponent({ toggle, chatOpened });
    expect(launcherComponent.find('.close-launcher')).toHaveLength(1);
  });
});
