import { connect } from 'react-redux'
import Routes from './Routes'



// -----------------------------------------------------------------------------

function mapStateToProps (state) {
  return {
    state: state
  }
}

function mapDispatchToProps (dispatch) {
  return {
    pushRoute: (route) => dispatch({
        type: 'PUSH_ROUTE',
        route: route
    })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes)
