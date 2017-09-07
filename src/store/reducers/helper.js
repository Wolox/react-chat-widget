import { Map } from 'immutable';
import moment from 'moment';
import { MESSAGES_TYPES, MESSAGE_SENDER } from 'constants';

export function createNewMessage(text, sender) {
  return Map({
    type: MESSAGES_TYPES.TEXT,
    text,
    sender,
    timestamp: moment().format()
  });
}

export function createLinkSnippet(link) {
  return Map({
    type: MESSAGES_TYPES.SNIPPET.LINK,
    title: link.title,
    link: link.link,
    sender: MESSAGE_SENDER.RESPONSE,
    timestamp: moment().format()
  });
}
