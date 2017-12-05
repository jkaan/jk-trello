import React from 'react'
import Board from './Board.js'
import PropTypes from 'prop-types'

const BoardList = ({ boards }) => (
  <div>
    {boards.map((board) => (
      <Board name={board.boardName} key={board.boardId}/>
    ))}
  </div>
)

BoardList.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      boardId: PropTypes.number.isRequired,
      boardName: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default BoardList


