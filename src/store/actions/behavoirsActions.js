const TOGGLE_CHAT = 'TOGGLE_CHAT';

export function toggleChat(showChat) {
  return {
    type: TOGGLE_CHAT,
    payload: {
      showChat
    }
  };
}
