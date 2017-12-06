import React from 'react'
import CreateList from './CreateList.js'
import ListList from './ListList.js'

const ActiveBoard = ({ board }) => (
  <div>
    <h2>{board.boardName}</h2>
    <CreateList boardId={board.boardId}/>
    <ListList lists={board.lists}/>
  </div>
)

export default ActiveBoard
