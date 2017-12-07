import React from 'react'
import { connect } from 'react-redux'
import { createCard } from './Actions/actions'
import Card from './Card'
import './List.css'

const List = ({ dispatch, list, boardId }) => {
  let newCard

  return (
    <div className="list">
      <div className="list-name">{list.listName}</div>
      {list.cards.map((card, index) => (
        <Card name={card.cardName} key={index}/>
      ))}
      <div>
        <form onSubmit={e => {
          e.preventDefault()

          if (!newCard.value.trim()) return
          dispatch(createCard(boardId, list.listId, newCard.value))
        }}>
          <input type="text" className="new-card" ref={node => {newCard = node}}/>
          <button type="submit">New Card</button>
        </form>
      </div>
    </div>
  )
}

export default connect()(List)
