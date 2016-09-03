import {
  connect
} from 'react-redux';

import { incrementCounter } from '../../store/actions'

// -----------------------------------------------------------------------------

import Login from './Login';

// -----------------------------------------------------------------------------

var mapStateToProps = (state) => {
  return {
    state: state.main
  }
}

var mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: arg => dispatch(incrementCounter(arg))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
