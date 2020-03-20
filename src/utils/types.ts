import { Component } from 'react';

export type Nullable<T> = T | null;

export type AnyFunction = (...args: any[]) => any;

export type Message = {
  type: string;
  component: Component;
  text: string;
  sender: string,
  showAvatar: boolean
}

export type QuickButton = {
  label: string;
  value: string | number;
  component?: Component;
}

export type Link = {
  title: string;
  link: string;
  target: string;
}
