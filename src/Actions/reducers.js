import { CREATE_BOARD, CREATE_LIST } from './actions.js'
import { fromJS } from 'immutable'

export function rootReducer(state, action) {
  const immutableState = fromJS(state);
  switch (action.type) {
    case CREATE_BOARD:
      return immutableState.update('boards', boards => boards.set(boards.size, {
          boardName: action.boardName,
          boardId: boards.size,
          lists: []
        })
      ).update('boardIds', boards => boards.push(boards.size)).toJS();
    case CREATE_LIST:
    return immutableState.updateIn(['boards', action.boardId.toString(), 'lists'], lists => lists.push({
      listName: action.listName,
      listId: lists.size
    })).toJS()
    default:
      return state
  }
}

export function getBoardById(state, id) {
  return state.boards[id]
}

export function getBoards(state) {
  return state.boardIds.map(id => getBoardById(state, id));
}
