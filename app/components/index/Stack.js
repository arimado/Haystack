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
      pan: new Animated.ValueXY(),
      scale: new Animated.Value(1),
      rotate: new Animated.Value(1)
    }
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
        this.state.pan.setValue({x: 0, y: 0});
      },
      onPanResponderMove: Animated.event([ null, {dx: this.state.pan.x, dy: this.state.pan.y},]),
      onPanResponderRelease: (e, {vx, vy}) => {

        // IF you release beyond the swipe threshold then fire the next card event

        // Go back to initial position
        this.state.pan.flattenOffset();
        Animated.spring(this.state.pan, {
            toValue: {x: 0, y: 0},
            friction: 3
        }).start()
      }
    });
  }

  render(){
    console.log('this.props.data: ', this.props.data.id)
    const s = style(this);
    // get the pan positions
    let { pan, scale } = this.state;
    let [translateX, translateY] = [pan.x, pan.y];
    // rotate intital start state of stack based on id
    // probably should update this
    let rotate = pan.x.interpolate({inputRange: [-200, 0, 200], outputRange: ["-30deg", `-${this.props.data.id/2}deg`, "30deg"]});
    let opacity = pan.x.interpolate({inputRange: [-200, 0, 200], outputRange: [0.4, 1, 0.4]})
    // transform position based on pan state
    let transform = {transform: [{translateX}, {translateY}, {rotate}, {scale}], opacity: opacity};

    return (
        <Animated.View style={[s.stackContainer, transform]} {...this._panResponder.panHandlers}/>
    )
  }

  componentDidMount() {
    this.state.bounceValue.setValue(1.5);
    Animated.spring(
      this.state.bounceValue,
      { toValue: 0.8, friction: 1 }
    ).start();
  }

  componentWillUpdate() {
  }

}

const style = (c) => (StyleSheet.create({
  stacksContainer: {
    flex: 1,
    backgroundColor: 'darksalmon',
    position: 'relative'
  },
  stackContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    flex: 1,
    margin: 15,
    backgroundColor: c.props.data.colorScheme
  }
}))

export default Stack;
