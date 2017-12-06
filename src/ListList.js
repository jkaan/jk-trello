import React from 'react'
import List from './List.js'

const ListList = ({ lists }) => (
  <div>
    <div>
      {lists.map((list) => (
        <List name={list.listName} />
      ))}
    </div>
  </div>
)

export default ListList


