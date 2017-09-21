import store from '../store';
import * as actions from './index';

export function addUserMessage(text) {
  store.dispatch(actions.addUserMessage(text));
}

export function addResponseMessage(text) {
  store.dispatch(actions.addResponseMessage(text));
}

export function addLinkSnippet(link) {
  store.dispatch(actions.addLinkSnippet(link));
}

export function renderCustomComponent(component, props) {
  store.dispatch(actions.renderCustomComponent(component, props));
}

export function toggleWidget() {
  store.dispatch(actions.toggleChat());
}
