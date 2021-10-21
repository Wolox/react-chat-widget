export enum MessageOrigin {
  client = 'client',
  response = 'response'
};

export const MESSAGES_TYPES = {
  TEXT: 'text',
  SNIPPET: {
    LINK: 'snippet'
  },
  CUSTOM_COMPONENT: 'component'
};

export const MESSAGE_BOX_SCROLL_DURATION = 400;
