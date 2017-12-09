import { CREATE_BOARD, CREATE_LIST, CREATE_CARD, MOVE_CARD_TO_LIST } from './actions.js'
import { fromJS } from 'immutable'
import _ from 'lodash'

export function rootReducer(state, action) {
  const immutableState = fromJS(state);
  switch (action.type) {
    case CREATE_BOARD:
      const boardId = _.uniqueId();
      return immutableState.update('boards', boards => boards.set(boardId, {
          boardName: action.boardName,
          boardId: boardId,
          lists: {},
          listIds: []
        })
      ).update('boardIds', boards => boards.push(boardId)).toJS();
    case CREATE_LIST:
      const listId = _.uniqueId()
      return immutableState.updateIn(['boards', action.boardId.toString(), 'lists'], lists => lists.set(listId,
        {
          listName: action.listName,
          listId: listId,
          cards: {},
          cardIds: []
        }
      ))
      .updateIn(['boards', action.boardId.toString(), 'listIds'], listIds => listIds.push(listId))
      .toJS()
    case CREATE_CARD:
      const cardId = _.uniqueId()
      return immutableState.updateIn(
        ['boards', action.boardId.toString(), 'lists', action.listId.toString(), 'cards'],
        cards => cards.set(cardId, {
          cardId: cardId,
          cardName: action.cardName
        })).updateIn(
          ['boards', action.boardId.toString(), 'lists', action.listId.toString(), 'cardIds'],
          cardIds => cardIds.push(cardId)
        ).toJS();
    case MOVE_CARD_TO_LIST:
      return immutableState.updateIn(
        ['boards', action.boardId.toString(), 'lists', action.listId.toString(), 'cards'],
        cards => cards.set(action.cardId, {
          cardId: action.cardId,
          cardName: action.cardName
        })).updateIn(
          ['boards', action.boardId.toString(), 'lists', action.listId.toString(), 'cardIds'],
          cardIds => cardIds.push(action.cardId)
        )
        .deleteIn(['boards', action.boardId.toString(), 'lists', action.previousListId.toString(), 'cards', action.cardId])
        .updateIn(['boards', action.boardId.toString(), 'lists', action.previousListId.toString(), 'cardIds'],
          cardIds => cardIds.delete(cardIds.indexOf(action.cardId))
        )
        .toJS()
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
