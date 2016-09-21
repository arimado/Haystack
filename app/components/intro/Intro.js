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

import Header from '../shared/Header'
import StatusBarBg from '../shared/StatusBarBg'

// -----------------------------------------------------------------------------

const STACKS_ROUTE = {
  type: 'push',
  route: {
    key: 'login',
    title: 'Login'
  }
}

// -----------------------------------------------------------------------------

class CurrentComponent extends Component {

  constructor(props, context) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <View>
        <StatusBarBg />
        <Text>
            { this.props.state.counter }
        </Text>

        <View style={style.bottomSection}>
          <Text> Another element </Text>
          <View style={style.bottomSectionChild}>
            <TouchableOpacity onPress={()=>{this.props._handleNavigate(STACKS_ROUTE)}} >
              <Text>
                HayStack (Index)
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.increaseCounter()}>
              <Text>
                Add
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  bottomSection: {
    backgroundColor: '#F5FCFF',
  },
  bottomSectionChild: {
    flex: 1
    
  }
})

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
)(CurrentComponent)
