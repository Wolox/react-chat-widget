import Conversation from '../components/Conversation';

const callback = () => {
  console.log('callback');
};

const pushNewResponseMessage = (text) => {
  Conversation.pushNewMessage({ text }, callback());
};

export { pushNewResponseMessage };
