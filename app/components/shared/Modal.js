import React, { Component } from 'react'

import {
  View,
  StyleSheet,
  Animated,
  Text
} from 'react-native'

const INITAL_SCALE = 0.2;
const OPEN_SCALE = 1.03;

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      translateY: new Animated.Value(0),
      scale: new Animated.Value(INITAL_SCALE)
    }
  }
  componentWillMount() {
    Animated.spring(this.state.scale, {
      toValue: OPEN_SCALE,
      friction: 3
    }).start();
  }
  render() {
    const { scale } = this.state;

    return (
      <View style={s.container}>
        <View style={s.verticalSpacer}/>
        <Animated.View style={[s.box, {transform: [{ scale }]}]} />
        <View style={s.verticalSpacer} />
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    flexDirection: 'column',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  },
  box: {
    flex: 0.2,
    backgroundColor: 'red',
  },
  verticalSpacer: {
    flex: 0.4,
    backgroundColor: 'blue',

  }
})

export default Modal
