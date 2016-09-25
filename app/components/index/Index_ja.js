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
      scale: new Animated.Value(1)
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
        this.state.pan.flattenOffset();

        Animated.spring(this.state.pan, {
            toValue: {x: 0, y: 0},
            friction: 3
          }).start()

      }
    });
  }

  render(){
    console.log('render!')
    const s = style(this);

    // get the pan positions
    let { pan, scale } = this.state;
    let [translateX, translateY] = [pan.x, pan.y];
    let rotate = pan.x.interpolate({inputRange: [-200, 0, 200], outputRange: ["-30deg", "0deg", "30deg"]});
    let transform = {transform: [{translateX}, {translateY}, {rotate}, {scale}]};

    return (
      <Animated.View style={[s.stackContainer, transform]} {...this._panResponder.panHandlers}>
        <View>
          <Text> Animated view </Text>
        </View>
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

  componentWillUpdate() {
    console.log('component updated');
  }

}

class Stacks extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={S.base}>
        <Header />
        <Stack />
      </View>
    );
  }
}


const style = (c) => (StyleSheet.create({
  stackContainer: {
    flex: 1,
    margin: 10,
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
