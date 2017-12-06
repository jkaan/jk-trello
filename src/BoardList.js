import React from 'react'
import Board from './Board.js'
import PropTypes from 'prop-types'
import CreateBoard from './CreateBoard'
import { Link } from 'react-router-dom'

const BoardList = ({ boards }) => (
  <div>
    <CreateBoard />
    <div>
      {boards.map((board) => (
        <Link to={"/b/" + board.boardId} key={board.boardId}>
          <Board name={board.boardName} />
        </Link>
      ))}
    </div>
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


