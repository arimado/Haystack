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
const OPEN_SCALE   = 1.03;
const CLOSE_SCALE  = 0;
const FRICTION     = 3;
const INITIAL_OPACITY = 1;
const CLOSE_OPACITY = 0;

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      translateY: new Animated.Value(0),
      scale: new Animated.Value(INITAL_SCALE),
      opacity: new Animated.Value(INITIAL_OPACITY)
    }
  }
  componentWillMount() {
    Animated.spring(this.state.scale, {
      toValue: OPEN_SCALE,
      friction: FRICTION
    }).start();
  }
  render() {
    const { scale, opacity } = this.state;
    const { toggleMatchModal } = this.props;
    return (
      <Animated.View style={[s.container, { opacity }]}>
        <View style={s.verticalSpacer}/>
        <Animated.View style={[s.box, {transform: [{ scale }]}]}>
          <View style={s.modal}>
            <View style={[s.button, s.row]}>
              <Icon name="check" style={[s.buttonText, s.modalIcon]} />
              <Text style={s.buttonText}> You matched with [name] ! </Text>
            </View>
            <View style={s.buttonsParent}>
              <TouchableOpacity style={s.button}>
                <Text style={s.buttonText}> Message </Text>
              </TouchableOpacity>
              <TouchableOpacity style={s.button} onPress={this._pressClose()}>
                <Icon name="layers" style={s.buttonText} />
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
        <View style={s.verticalSpacer} />
      </Animated.View>
    );
  }

  _pressNext() {

  }

  _pressClose() {
    return () => {
      this.props.deactivateStack();
      Animated.timing(this.state.opacity, {
        toValue: CLOSE_OPACITY,
        duration: 200
      })
      .start(() => {
        this.props.toggleMatchModal();
      });
    }
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
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
  box: {
    flex: 0.4,
    padding: 40
  },
  modal: {
    flex: 1,

  },
  verticalSpacer: {
    flex: 0.3,
  },
  row: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: MODAL_COLOR
  },
  buttonsParent: {
    backgroundColor: 'blueviolet',
    flexDirection: 'row',
    flex: 0.3,
    alignItems: 'center',
  },
  button: {
    flex: 1,
    flexDirection: 'column',
  },
  buttonText: {
    color: 'cornsilk',
    textAlign: 'center',
    fontSize: 15
  },
  modalIcon: {
    fontSize: 40
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

import {
  toggleMatchModal,
  deactivateStack
} from '../../store/actions'

// -----------------------------------------------------------------------------


const mapDispatchToProps = (dispatch) => {
  return {
    toggleMatchModal: () => dispatch(toggleMatchModal()),
    deactivateStack: stackNum => dispatch(deactivateStack(stackNum))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Modal)
