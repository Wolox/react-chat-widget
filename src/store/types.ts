import { ElementType } from 'react';

type BaseMessage = {
  type: string;
  component: ElementType;
  sender: string,
  showAvatar: boolean
  props?: any;
}

export interface Message extends BaseMessage {
  text: string;
};

export type QuickButton = {
  label: string;
  value: string | number;
  component?: ElementType;
};

export interface Link extends BaseMessage {
  title: string;
  link: string;
  target: string;
};

export interface CustomCompMessage extends BaseMessage {
  props: any;
}

export interface BehaviorState {
  showChat: boolean;
  disabledInput: boolean;
  messageLoader: boolean;
};

export interface MessagesState {
  messages: Array<Message | Link | CustomCompMessage>;
}

export interface QuickButtonsState {
  quickButtons: Array<QuickButton>;
}

export interface GlobalState {
  messages: MessagesState;
  behavior: BehaviorState;
  quickButtons: QuickButtonsState;
}
