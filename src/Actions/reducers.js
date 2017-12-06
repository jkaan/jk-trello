import { CREATE_BOARD, CREATE_LIST } from './actions.js'
import { fromJS } from 'immutable'

const initialState = {
  boards: []
}

function trelloApp(state = initialState, action) {
  const immutableState = fromJS(state);
  switch (action.type) {
    case CREATE_BOARD:
      return immutableState.update('boards', boards => boards.push({
          boardName: action.boardName,
          boardId: boards.size,
          lists: []
        }
      )).toJS();
    case CREATE_LIST:
    // Get the index of the board to add the list to
    const boardIndex = immutableState.get('boards').findIndex(board => {
      return board.get('boardId') === action.boardId
    })
    // Get the actual board
    let board = immutableState.get('boards').get(boardIndex);

    // Update the board to add the list
    board = board.update('lists', lists => lists.push({
      listName: action.listName
    }));

    // Delete the original board from the boards
    const boards = immutableState.get('boards').delete(boardIndex).push(board);
    return immutableState.set('boards', boards).toJS();
    default:
      return state
  }
}

export default trelloApp
