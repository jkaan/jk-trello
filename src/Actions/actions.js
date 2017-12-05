// Action Types
export const CREATE_BOARD = 'CREATE_BOARD';

export function createBoard(boardName) {
  return { type: CREATE_BOARD, boardName }
}
