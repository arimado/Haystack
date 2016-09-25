import React, { Component } from 'react'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigationExperimental,
  TouchableOpacity,
  Animated
} from 'react-native'

import S from '../styles/styles.js';

import _ from 'lodash';

// -----------------------------------------------------------------------------

// reducers.js currently holds the store object

import styles from '../styles'
import store from '../../store/reducers';
import RoutesContainer from '../../routes/RoutesContainer';
import Header from '../shared/Header';


// -----------------------------------------------------------------------------

const BACK = {
  type: 'pop'
}

// -----------------------------------------------------------------------------

class Stack extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bounceValue: new Animated.Value(0)
    }
  }

  render(){
    const s = style(this);
    return (
      <Animated.View style={s.stackContainer}>
        <Text> Animated view </Text>
      </Animated.View>
    )
  }

  componentDidMount() {
    this.state.bounceValue.setValue(1.5);
    Animated.spring(
      this.state.bounceValue,
      {
        toValue: 0.8,
        friction: 1
      }
    ).start();
  }
}

class Stacks extends Component {
  render() {
    return (
      <View style={S.base}>
        <Header />
        <TouchableOpacity onPress={()=>this.props._handleNavigate(BACK)}>
          <Text style={styles.welcome}>
            <Stack />
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const style = (c) => (StyleSheet.create({
  stackContainer: {
    width: 100,
    height: 100,
    backgroundColor: 'blueviolet',
    flex: 1,
    transform: [ { scale: c.state.bounceValue ? c.state.bounceValue : 0 } ]
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
)(Stacks)
