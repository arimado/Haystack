import React, { Component } from 'react'

import {
  View,
  StyleSheet,
  Animated
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
       <Animated.View
          style={[s.box, {transform: [{ scale }]}]}
          />
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    flex: 1, 
    backgroundColor: 'red',
    height: 300,
    width: 100
  }
})

export default Modal
