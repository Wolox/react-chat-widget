import { Map } from 'immutable';
import moment from 'moment';
import { MESSAGES_TYPES } from 'constants';

export function createNewMessage(text, sender) {
  return Map({
    type: MESSAGES_TYPES.TEXT,
    text,
    timestamp: moment().format(),
    sender
  });
}
