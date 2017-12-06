import React from 'react'
import PropTypes from 'prop-types'
import CreateList from './CreateList.js'
import ListList from './ListList.js'

const ActiveBoard = ({ board }) => (
  <div>
    <h2>{board.boardName}</h2>
    <CreateList boardId={board.boardId}/>
    <ListList lists={board.lists}/>
  </div>
)

ActiveBoard.propTypes = {
  board: PropTypes.shape({
    boardName: PropTypes.string.isRequired,
    boardId: PropTypes.number.isRequired,
    lists: PropTypes.arrayOf(
      PropTypes.shape({
        listName: PropTypes.string.isRequired,
        listId: PropTypes.number.isRequired
      })
    )
  })
}

export default ActiveBoard
