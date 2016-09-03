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

import Login from './Login';

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
)(Login)
