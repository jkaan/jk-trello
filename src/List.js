import React from 'react'
import { PropTypes } from 'prop-types'
import './List.css'

const List = ({ name }) => (
  <div className="list">
    {name}
  </div>
)

List.propTypes = {
  name: PropTypes.string.isRequired
}

export default List
