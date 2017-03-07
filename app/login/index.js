import React, { Component } from 'react'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigationExperimental,
  TouchableOpacity
} from 'react-native'

import _ from 'lodash';

// -----------------------------------------------------------------------------

// reducers.js currently holds the store object
import store from 'app/store/reducers';
import RoutesContainer from 'app/routes/RoutesContainer';

// -----------------------------------------------------------------------------

const STACKS_ROUTE = {
  type: 'push',
  route: {
    key: 'stacks',
    title: 'Stacks'
  }
}

// -----------------------------------------------------------------------------

class Login extends Component {

  constructor(props, context) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <View>
          <Text> Login screen </Text>
      </View>
    );
  }
}

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// REDUX CONTAINER -------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

import {
  connect
} from 'react-redux';

import { incrementCounter } from 'app/store/actions'

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
