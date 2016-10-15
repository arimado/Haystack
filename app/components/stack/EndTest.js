import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from 'react-native'

import S from '../styles/styles.js';
import * as H from '../../helpers/helpers';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/Entypo'

// -----------------------------------------------------------------------------

// reducers.js currently holds the store object
import store from '../../store/reducers';

// -----------------------------------------------------------------------------

const EndTest = ({ stackClose, stackSubmit }) => {
  const s = style(this);
  return (
  <View style={s.rootContainer}>
    <TouchableOpacity style={[s.button, s.exitButton]} onPress={() => stackClose() }>
      <Icon name="circle-with-cross" style={s.icon} />
    </TouchableOpacity>
    <TouchableOpacity style={[s.button, s.submitButton]} onPress={() => stackClose() }>
      <Icon name="paper-plane" style={s.icon} />
    </TouchableOpacity>
  </View>)
}

const style = (c) => (StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    borderColor: 'rgba(255,255,255, 0.2)',
    backgroundColor: 'rgba(255,255,255, 0.2)',

  },
  button: {
    padding: 20,
    alignItems: 'center'
  },
  exitButton: {
    // backgroundColor: 'rgba(0,0,0, 0.3)',
    flex: 0.2,
    borderColor: 'rgba(255,255,255, 0.2)',
    borderRightWidth: 1
  },
  exitIcon: {
  },
  submitButton: {
    flex: 0.8
  },
  submitIcon: {

  },
  icon: {
    color: 'white',
    fontSize: 30
  }
}))


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

// -----------------------------------------------------------------------------

import {
selectAnswer,
} from '../../store/actions'


var mapStateToProps = (state) => {
  return {
    state: state
  }
}

var mapDispatchToProps = (dispatch) => {
  return {
    selectAnswer: id => dispatch(selectAnswer(id))
   }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EndTest)
