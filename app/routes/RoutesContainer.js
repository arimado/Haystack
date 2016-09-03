import { connect } from 'react-redux'
import Routes from './Routes'



// -----------------------------------------------------------------------------

function mapStateToProps (state) {
  return {
    navigation: state.navigation
  }
}

function mapDispatchToProps (dispatch) {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes)
