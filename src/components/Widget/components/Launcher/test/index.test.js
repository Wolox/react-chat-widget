import { configure, mount } from 'enzyme';
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Launcher from '../index';
import Badge from '../components/Badge';

configure({ adapter: new Adapter() });
const mockStore =  configureMockStore()

describe('<Launcher />', () => {
  const createMessageComponent = ({ toggle, chatOpened, badge = 0 }) => {
    const store = mockStore({
      behavior: { showChat: chatOpened },
      messages: { badgeCount: badge }
    });

    return mount(
      <Provider store={store}>
        <Launcher
          toggle={toggle}
        />
      </Provider>
    );
  }

  it('should call toggle prop when clicked', () => {
    const toggle = jest.fn();
    const chatOpened = false;
    const launcherComponent = createMessageComponent({ toggle, chatOpened });
    launcherComponent.find('.rcw-launcher').simulate('click');
    expect(toggle).toBeCalled();
  });

  it('should render the open-launcher image when chatOpened = false', () => {
    const toggle = jest.fn();
    const chatOpened = false;
    const launcherComponent = createMessageComponent({ toggle, chatOpened });
    expect(launcherComponent.find('.rcw-open-launcher')).toHaveLength(1);
  });

  it('should render the close-launcher image when chatOpened = true', () => {
    const toggle = jest.fn();
    const chatOpened = true;
    const launcherComponent = createMessageComponent({ toggle, chatOpened });
    expect(launcherComponent.find('.rcw-close-launcher')).toHaveLength(1);
  });

  it('should render Badge component when closed and new message is in', () => {
    const toggle = jest.fn();
    const chatOpened = false;
    const badge = 1;
    const launcherComponent = createMessageComponent({ toggle, chatOpened, badge });
    expect(launcherComponent.find(Badge).props().badge).toBe(1);
  })
});
