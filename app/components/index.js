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

import store from '../store/reducers';
import RoutesContainer from '../routes/RoutesContainer';
import Login from './login/Login';

// -----------------------------------------------------------------------------

const Index = () => {
    return (
        <Provider store={store}>
            <RoutesContainer/>
        </Provider>
    )
}

export default Index;
