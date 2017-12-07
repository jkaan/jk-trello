import React from 'react'
import ListContainer from './ListContainer'
import PropTypes from 'prop-types'

const ListList = ({ boardId, lists }) => (
  <div>
    <div>
      {lists.map((list) => (
        <ListContainer list={list} key={list.listId} boardId={boardId}/>
      ))}
    </div>
  </div>
)

ListList.propTypes = {
  boardId: PropTypes.number.isRequired,
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      listName: PropTypes.string.isRequired,
      listId: PropTypes.number.isRequired
    })
  )
}

export default ListList


