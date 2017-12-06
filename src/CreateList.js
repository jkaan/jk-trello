import React from 'react';
import { connect } from 'react-redux'
import { createList } from './Actions/actions'

const mapStateToProps = (state, props) => {
  return { boardId: props.boardId }
}

const CreateList = ({ dispatch, boardId }) => {
  let listName

  return (
    <div className="create-list">
      <h2>Create a new list</h2>
      <form
        onSubmit={e => {
          e.preventDefault();

          if (!listName.value.trim()) return
          dispatch(createList(boardId, listName.value))
          listName.value = ''
        }}
      >
        <input type="text" name="list-name"
          ref={node => { listName = node }} />
        <button type="submit">Create List</button>
      </form>
    </div>
  )
}

export default connect(mapStateToProps)(CreateList)
