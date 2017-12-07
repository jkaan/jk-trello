// Action Types
export const CREATE_BOARD = 'CREATE_BOARD'
export const CREATE_LIST = 'CREATE_LIST'
export const CREATE_CARD = 'CREATE_CARD'
export const MOVE_CARD_TO_LIST = 'MOVE_CARD_TO_LIST'

export function createBoard(boardName) {
  return { type: CREATE_BOARD, boardName }
}

export function createList(boardId, listName) {
  return { type: CREATE_LIST, boardId, listName }
}

export function createCard(boardId, listId, cardName) {
  return { type: CREATE_CARD, boardId, listId, cardName }
}

export function moveCardToList(cardId, cardName, boardId, previousListId, listId) {
  return { type: MOVE_CARD_TO_LIST, cardId, cardName, boardId, previousListId, listId }
}
