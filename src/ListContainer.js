import { connect } from 'react-redux'
import List from './List'
import { getCards } from './Actions/reducers'

const mapStateToProps = (state, ownProps) => {
  return {
    boardId: ownProps.boardId,
    list: ownProps.list,
    cards: getCards(state, ownProps.boardId, ownProps.list.listId)
  }
}

export default connect(mapStateToProps)(List)
