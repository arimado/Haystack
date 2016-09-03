import React, { Component } from 'react'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigationExperimental
} from 'react-native'

import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'

import {
  connect,
  Provider
} from 'react-redux';

import Thunk from 'redux-thunk';
import Logger from 'redux-logger';
import _ from 'lodash';

// -----------------------------------------------------------------------------

// reducers.js currently holds the store object

import store from '../../store/reducers';
import RoutesContainer from '../../routes/RoutesContainer';

// -----------------------------------------------------------------------------

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Haystack
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Login
