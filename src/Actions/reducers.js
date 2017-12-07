import { CREATE_BOARD, CREATE_LIST, CREATE_CARD, MOVE_CARD_TO_LIST } from './actions.js'
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
          cards: {},
          cardIds: []
        }
      ))
      .updateIn(['boards', action.boardId.toString(), 'listIds'], listIds => listIds.push(listIds.size))
      .toJS()
    case CREATE_CARD:
      return immutableState.updateIn(
        ['boards', action.boardId.toString(), 'lists', action.listId.toString(), 'cards'],
        cards => cards.set(cards.size, {
          cardId: cards.size,
          cardName: action.cardName
        })).updateIn(
          ['boards', action.boardId.toString(), 'lists', action.listId.toString(), 'cardIds'],
          cardIds => cardIds.push(cardIds.size)
        ).toJS();
    case MOVE_CARD_TO_LIST:
      return immutableState.updateIn(
        ['boards', action.boardId.toString(), 'lists', action.listId.toString(), 'cards'],
        cards => cards.set(cards.size, {
          cardId: action.cardId,
          cardName: action.cardName
        })).updateIn(
          ['boards', action.boardId.toString(), 'lists', action.listId.toString(), 'cardIds'],
          cardIds => cardIds.push(cardIds.size)
        ).deleteIn(['boards', action.boardId.toString(), 'lists', action.list]).toJS()
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

export function getCardById(state, boardId, listId, cardId) {
  return state.boards[boardId].lists[listId].cards[cardId]
}

export function getCards(state, boardId, listId) {
  return state.boards[boardId].lists[listId].cardIds.map(id => getCardById(state, boardId, listId, id))
}
