import PropTypes from 'prop-types';

const MESSAGE_SENDER = {
  CLIENT: 'client',
  RESPONSE: 'response'
};

const MESSAGES_TYPES = {
  TEXT: 'text',
  SNIPPET: {
    LINK: 'link'
  }
};

const PROP_TYPES = {
  STYLES: PropTypes.shape({
    header: PropTypes.object,
    launcher: PropTypes.object,
    avatar: PropTypes.object,
    messagesContainer: PropTypes.object,
    message: PropTypes.object,
    responses: PropTypes.object,
    snippet: PropTypes.shape({
      info: PropTypes.object
    })
  }),

  MESSAGE: PropTypes.shape({
    type: PropTypes.oneOf([
      MESSAGES_TYPES.TEXT,
      MESSAGES_TYPES.SNIPPET.LINK
    ]),
    text: PropTypes.string,
    timestamp: PropTypes.string,
    sender: PropTypes.oneOf([
      MESSAGE_SENDER.CLIENT,
      MESSAGE_SENDER.RESPONSE
    ])
  }),

  SNIPPET: PropTypes.shape({
    type: PropTypes.oneOf([
      MESSAGES_TYPES.TEXT,
      MESSAGES_TYPES.SNIPPET.LINK
    ]),
    title: PropTypes.string,
    link: PropTypes.string,
    timestamp: PropTypes.string,
    sender: PropTypes.oneOf([
      MESSAGE_SENDER.CLIENT,
      MESSAGE_SENDER.RESPONSE
    ])
  })
};

export {
  MESSAGE_SENDER,
  MESSAGES_TYPES,
  PROP_TYPES
};
