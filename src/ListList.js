import React from 'react'
import List from './List.js'
import PropTypes from 'prop-types'

const ListList = ({ lists }) => (
  <div>
    <div>
      {lists.map((list) => (
        <List name={list.listName} key={list.listId}/>
      ))}
    </div>
  </div>
)

ListList.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      listName: PropTypes.string.isRequired,
      listId: PropTypes.number.isRequired
    })
  )
}

export default ListList


