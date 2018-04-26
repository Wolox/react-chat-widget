import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

export const MESSAGE_SENDER = {
  CLIENT: 'client',
  RESPONSE: 'response'
};

export const MESSAGES_TYPES = {
  TEXT: 'text',
  SNIPPET: {
    LINK: 'snippet'
  },
  CUSTOM_COMPONENT: 'component'
};

export const PROP_TYPES = {
  MESSAGE: ImmutablePropTypes.contains({
    type: PropTypes.oneOf([
      MESSAGES_TYPES.TEXT,
      MESSAGES_TYPES.SNIPPET.LINK
    ]),
    text: PropTypes.string,
    sender: PropTypes.oneOf([
      MESSAGE_SENDER.CLIENT,
      MESSAGE_SENDER.RESPONSE
    ])
  }),

  SNIPPET: ImmutablePropTypes.contains({
    type: PropTypes.oneOf([
      MESSAGES_TYPES.TEXT,
      MESSAGES_TYPES.SNIPPET.LINK
    ]),
    title: PropTypes.string,
    link: PropTypes.string,
    sender: PropTypes.oneOf([
      MESSAGE_SENDER.CLIENT,
      MESSAGE_SENDER.RESPONSE
    ])
  })
};

export const CHAT_ERRORS = {
  UPGRADE: 'Web Speech API is not supported by this browser. Upgrade to Chrome version 25 or later.',
  NO_SPEECH: 'No speech was detected. You may need to adjust your microphone settings',
  AUDIO_CAPTURE: 'No microphone was found. Ensure that a microphone is installed and that microphone settings are configured correctly.',
  NOT_ALLOWED_LESS_100: 'Permission to use microphone is blocked. To change, go to chrome://settings/contentExceptions#media-stream',
  NOT_ALLOWED: 'Permission to use microphone was denied.',
  ALLOW: 'Click the "Allow" button above to enable your microphone.'
};
