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
import styles from '../styles'
import store from '../../store/reducers';
import RoutesContainer from '../../routes/RoutesContainer';

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
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>{this.props._handleNavigate(STACKS_ROUTE)}} >
          <Text style={styles.welcome}>
            HayStack
          </Text>
        </TouchableOpacity>
        <Text style={styles.instructions}>
            { this.props.state.counter }
        </Text>
        <TouchableOpacity onPress={() => this.props.increaseCounter()}>
          <Text style={styles.instructions}>
            Add
          </Text>
        </TouchableOpacity>
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

import { incrementCounter } from '../../store/actions'

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
