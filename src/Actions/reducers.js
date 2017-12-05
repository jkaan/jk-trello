import { CREATE_BOARD } from './actions.js'

const initialState = {
  boards: []
}

function trelloApp(state = initialState, action) {
  switch (action.type) {
    case CREATE_BOARD:
      return Object.assign({}, state, {
        boards: [
          ...state.boards,
          {
            boardName: action.boardName,
            boardId: state.boards.length
          }
        ]
      })
    default:
      return state
  }
}

export default trelloApp
