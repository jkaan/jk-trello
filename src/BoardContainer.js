import { connect } from 'react-redux'
import BoardList from './BoardList.js'

const mapStateToProps = state => {
  return {
    boards: state.boards
  }
}

export default connect(mapStateToProps)(BoardList)
