import { CREATE_BOARD, CREATE_LIST, CREATE_CARD } from './actions.js'
import { fromJS } from 'immutable'

export function rootReducer(state, action) {
  const immutableState = fromJS(state);
  switch (action.type) {
    case CREATE_BOARD:
      return immutableState.update('boards', boards => boards.set(boards.size, {
          boardName: action.boardName,
          boardId: boards.size,
          lists: {},
          listIds: []
        })
      ).update('boardIds', boards => boards.push(boards.size)).toJS();
    case CREATE_LIST:
      return immutableState.updateIn(['boards', action.boardId.toString(), 'lists'], lists => lists.set(lists.size,
        {
          listName: action.listName,
          listId: lists.size,
          cards: []
        }
      ))
      .updateIn(['boards', action.boardId.toString(), 'listIds'], listIds => listIds.push(listIds.size))
      .toJS()
    case CREATE_CARD:
      return immutableState.updateIn(
        ['boards', action.boardId.toString(), 'lists', action.listId.toString(), 'cards'],
        cards => cards.push({
          cardName: action.cardName
        })).toJS();
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

export function getListById(state, boardId, listId) {
  return state.boards[boardId].lists[listId]
}

export function getLists(state, boardId) {
  return state.boards[boardId].listIds.map(id => getListById(state, boardId, id));
}
