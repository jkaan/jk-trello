import React from 'react'
import CreateList from './CreateList.js'
import ListContainer from './ListContainer'

const ActiveBoard = ({ board }) => (
  <div>
    <h2>{board.boardName}</h2>
    <CreateList boardId={board.boardId}/>
    <ListContainer boardId={board.boardId}/>
  </div>
)

export default ActiveBoard
