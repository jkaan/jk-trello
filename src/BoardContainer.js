import { connect } from 'react-redux'
import BoardList from './BoardList.js'
import { getBoards } from './Actions/reducers'

const mapStateToProps = state => {
  return {
    boards: getBoards(state)
  }
}

export default connect(mapStateToProps)(BoardList)
