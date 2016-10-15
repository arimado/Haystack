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

const EndTest = () => {
  const s = style(this);
  return (<TouchableOpacity style={s.exitButton} onPress={() => this._stackClose() }>
    <Icon name="circle-with-cross" style={s.exitIcon} />
  </TouchableOpacity>)
}

const style = (c) => (StyleSheet.create({
  rootContainer: {
  },
  exitButton: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0, 0.3)',
  },
  exitIcon: {
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
