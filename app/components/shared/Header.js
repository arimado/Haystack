// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// REACT COMPONENT -------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

import React, { Component } from 'react'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigationExperimental,
  TouchableOpacity,

} from 'react-native';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/Entypo'

import S from '../styles/styles'

// -----------------------------------------------------------------------------

// reducers.js currently holds the store object
import store from '../../store/reducers';
import RoutesContainer from '../../routes/RoutesContainer';
import StatusBarBg from './StatusBarBg'

const INTRO_ROUTE = {
  type: 'push',
  route: {
    key: 'intro',
    title: 'Stacks'
  }
}

// -----------------------------------------------------------------------------

const Header = ({handleNavigate, resetStacks}) => {
  return (
    <View>
      <StatusBarBg/>
      <View style={s.container}>
        <TouchableOpacity style={s.button} onPress={() => { handleNavigate(INTRO_ROUTE) }} >
            <Icon name="text-document-inverted" style={s.buttonText} />
        </TouchableOpacity>
        <TouchableOpacity style={s.button} onPress={() => {resetStacks()}}>
            <Icon name="layers" style={s.buttonText} />
        </TouchableOpacity>
        <TouchableOpacity style={s.button}>
            <Icon name="message" style={s.buttonText} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    backgroundColor: 'rebeccapurple',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 30
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
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
