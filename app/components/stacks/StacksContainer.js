import {
  connect
} from 'react-redux';

// -----------------------------------------------------------------------------

import Stacks from './Stacks';

// -----------------------------------------------------------------------------

var mapStateToProps = (state) => {
  return {
    state: state
  }
}

var mapDispatchToProps = (dispatch) => {
  return {
    doSomething: arg => console.log('nice')
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stacks)
