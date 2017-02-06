import React, { Component } from 'react'

import {
  View,
  StyleSheet,
  Animated,
  Text,
  TouchableOpacity
} from 'react-native'

import Icon from 'react-native-vector-icons/Entypo'

import { MODAL_COLOR } from '../../constants/layout'

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
        <Animated.View style={[s.box, {transform: [{ scale }]}]}>
          <View style={s.modal}>
            <View style={s.row}>
               <Text> Image </Text>
            </View>
            <View style={s.row}>
              <Text> You matched </Text>
            </View>
            <View style={s.buttonsParent}>
              <TouchableOpacity style={s.button}>
                <Text style={s.buttonText}> Message [name] now </Text>
              </TouchableOpacity>
              <TouchableOpacity style={s.button}>
                <Text style={s.buttonText}> Go back to the stack </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
        <View style={s.verticalSpacer} />
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flexDirection: 'column',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
  box: {
    flex: 0.4,
    padding: 40
  },
  modal: {
    flex: 1,
    backgroundColor: MODAL_COLOR
  },
  verticalSpacer: {
    flex: 0.3,
  },
  row: {
    flex: 1
  },
  buttonsParent: {
    backgroundColor: 'blueviolet',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  button: {
    flex: 1,
    flexDirection: 'column',
  },
  buttonText: {
    color: 'cornsilk',
    textAlign: 'center'
  }
})

export default Modal
