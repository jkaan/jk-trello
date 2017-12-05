import React from 'react'
import './Board.css'
import { PropTypes } from 'prop-types'

const Board = ({ name }) => (
  <div className="board">
    {name}
  </div>
)

Board.propTypes = {
  name: PropTypes.string.isRequired
}

export default Board
