import React from 'react'
import { connect } from 'react-redux'
import { createCard } from './Actions/actions'
import Card from './Card'
import './List.css'
import { DropTarget } from 'react-dnd'
import { moveCardToList } from './Actions/actions'

const listTarget = {
  drop(props, monitor) {
    const { dispatch } = props
    dispatch(
      moveCardToList(
        monitor.getItem()['cardId'],
        monitor.getItem()['cardName'],
        props.boardId,
        props.list.listId
      )
    )
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}

const List = ({ dispatch, list, boardId, cards, connectDropTarget }) => {
  let newCard

  return connectDropTarget(
    <div className="list">
      <div className="list-name">{list.listName}</div>
      {cards.map((card, index) => (
        <Card name={card.cardName} id={card.cardId} key={index}/>
      ))}
      <div>
        <form onSubmit={e => {
          e.preventDefault()

          if (!newCard.value.trim()) return
          dispatch(createCard(boardId, list.listId, newCard.value))
          newCard.value = ''
        }}>
          <input type="text" className="new-card" ref={node => {newCard = node}}/>
          <button type="submit">New Card</button>
        </form>
      </div>
    </div>
  )
}

export default DropTarget('card', listTarget, collect)(connect()(List))
