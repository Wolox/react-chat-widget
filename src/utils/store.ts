import configureMockStore from 'redux-mock-store'

export const createMockStore = (state = {}) =>  
  configureMockStore()({
    behavior: { showChat: false, disabledInput: false },
    messages: { messages: [], badgeCount: 0 },
    preview: { visible: false },
    ...state
  })
