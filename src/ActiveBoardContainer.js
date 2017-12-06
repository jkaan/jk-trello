import { connect } from 'react-redux'
import ActiveBoard from './ActiveBoard'

const mapStateToProps = (state, ownProps) => {
  return {
    board: state.boards.find(board => board.boardId === parseInt(ownProps.match.params.id, 10))
  }
}

export default connect(mapStateToProps)(ActiveBoard)
