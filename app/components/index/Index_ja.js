import React, { Component } from 'react'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigationExperimental,
  TouchableOpacity,
  PanResponder,
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
      bounceValue: new Animated.Value(0),
      pan: new Animated.ValueXY()
    }
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setValue({x: 0, y: 0});
      },
      onPanResponderMove: Animated.event([ null, {dx: this.state.pan.x, dy: this.state.pan.y},]),

      onPanResponderRelease: (e, {vx, vy}) => {}
    });
  }

  render(){
    const s = style(this);

    // Destructure the value of pan from the state
    let { pan } = this.state;

    // Calculate the x and y transform from the pan value
    let [translateX, translateY] = [pan.x, pan.y];

    // Calculate the transform property and set it as a value for our style which we add below to the Animated.View component
    let boxStyle = {transform: [{translateX}, {translateY}]};

    return (
      <Animated.View style={[s.stackContainer, boxStyle]} {...this._panResponder.panHandlers}>
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

        </TouchableOpacity>
        <Stack />
      </View>
    );
  }
}


const style = (c) => (StyleSheet.create({
  stackContainer: {
    width: 100,
    height: 100,
    backgroundColor: 'blueviolet'
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
