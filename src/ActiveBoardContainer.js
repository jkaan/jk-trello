import { connect } from 'react-redux'
import ActiveBoard from './ActiveBoard'
import { getBoardById } from './Actions/reducers'

const mapStateToProps = (state, ownProps) => {
  return {
    board: getBoardById(state, parseInt(ownProps.match.params.id, 10))
  }
}

export default connect(mapStateToProps)(ActiveBoard)
