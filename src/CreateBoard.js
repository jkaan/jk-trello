import React from 'react';
import { connect } from 'react-redux'
import { createBoard } from './Actions/actions'

const CreateBoard = ({ dispatch }) => {
  let boardName

  return (
    <div className="create-board">
      <h2>Create a new board</h2>
      <form
        onSubmit={e => {
          e.preventDefault();

          if (!boardName.value.trim()) return
          dispatch(createBoard(boardName.value))
          boardName.value = ''
        }}
      >
        <input type="text" name="board-name"
          ref={node => { boardName = node }} />
        <button type="submit">Create board</button>
      </form>
    </div>
  )
}

export default connect()(CreateBoard)
