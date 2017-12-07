import React, { Component } from 'react'
import CreateList from './CreateList.js'
import ListsContainer from './ListsContainer'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

class ActiveBoard extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.board.boardName}</h2>
        <CreateList boardId={this.props.board.boardId}/>
        <ListsContainer boardId={this.props.board.boardId}/>
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(ActiveBoard)
