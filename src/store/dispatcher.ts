import { ElementType } from 'react';

import store from '.';
import * as actions from './actions';
import { LinkParams } from './types';

export function addUserMessage(text: string) {
  store.dispatch(actions.addUserMessage(text));
}

export function addResponseMessage(text: string) {
  store.dispatch(actions.addResponseMessage(text));
}

export function addLinkSnippet(link: LinkParams) {
  store.dispatch(actions.addLinkSnippet(link));
}

export function toggleMsgLoader() {
  store.dispatch(actions.toggleMsgLoader());
}

export function renderCustomComponent(component: ElementType, props: any, showAvatar = false) {
  store.dispatch(actions.renderCustomComponent(component, props, showAvatar));
}

export function toggleWidget() {
  store.dispatch(actions.toggleChat());
}

export function toggleInputDisabled() {
  store.dispatch(actions.toggleInputDisabled());
}

export function dropMessages() {
  store.dispatch(actions.dropMessages());
}

export function isWidgetOpened(): boolean {
  return store.getState().behavior.showChat;
}

export function setQuickButtons(buttons: Array<{ label: string, value: string | number }>) {
  store.dispatch(actions.setQuickButtons(buttons));
}

export function deleteMessages(count: number, id?: string) {
  store.dispatch(actions.deleteMessages(count, id));
}
