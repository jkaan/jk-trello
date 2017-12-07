import { connect } from 'react-redux'
import ListList from './ListList'
import { getLists } from './Actions/reducers'

const mapStateToProps = (state, ownProps) => {
  return {
    boardId: ownProps.boardId,
    lists: getLists(state, ownProps.boardId)
  }
}

export default connect(mapStateToProps)(ListList)
