import React from 'react'
import './Card.css'
import { DragSource } from 'react-dnd'

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

const Card = ({ name, connectDragSource, isDragging }) => {
  return connectDragSource(
    <div className="card" style={{
      opacity: isDragging ? 0 : 1,
      cursor: 'move'
    }}>
      {name}
    </div>
  )
}

export default DragSource('card', {
  beginDrag(props) {
    return {}
  }
}, collect)(Card)
