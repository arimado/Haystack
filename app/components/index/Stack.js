import React, { Component } from 'react'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigationExperimental,
  TouchableOpacity,
  PanResponder,
  Animated,
  Image
} from 'react-native'

import S from '../styles/styles.js';

import _ from 'lodash';

// -----------------------------------------------------------------------------

// reducers.js currently holds the store object

import styles from '../styles';
import store from '../../store/reducers';
import RoutesContainer from '../../routes/RoutesContainer';
import Header from '../shared/Header';

// -----------------------------------------------------------------------------

const BACK = { type: 'pop'};
const SWIPE_THRESHOLD = 150;

// -----------------------------------------------------------------------------

const offsetRotationEvery = (number, reset) => {
  if ( number === 0 ) return '0deg'
  if ( number % reset > 0 ) return number % reset / 2 + 'deg'
  return 4 / 2 + 'deg'
}

// -----------------------------------------------------------------------------

class Stack extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bounceValue: new Animated.Value(0),
      pan: new Animated.ValueXY(),
      scale: new Animated.Value(1),
      rotate: new Animated.Value()
    }
  }
  componentWillMount() {

    let { nextCard } = this.props;

    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
        this.state.pan.setValue({x: 0, y: 0});
        this.state.rotate.setValue(90);
      },
      onPanResponderMove: (event, gestureState) => {
        Animated.event([ null, {dx: this.state.pan.x, dy: this.state.pan.y},]).call(this, event, gestureState);
      },
      onPanResponderRelease: (e, {vx, vy}) => {

        // JA
        // Possible pan/touch-to open response solution:
        // if distnance travelled of pan responder touch and release
        // is below a threshold then open that bad boy up. If it isn't, then just move it
        // Not sure if you can track the movement distance if it moves away then back within
        // the threshold then release..




        // JA
        // Dont get what this is lol
        this.state.pan.flattenOffset();

        // IF you release beyond the swipe threshold then fire the next card event
        // nextCard();
        let swipeDistance = Math.abs(this.state.pan.x._value);
        if (swipeDistance > SWIPE_THRESHOLD) {
          Animated.decay(this.state.pan, {
            velocity: {x: 0, y: 0},
            deceleration: 0.97
          }).start(this._nextCardState())
        } else {
          // Go back to initial position
          Animated.spring(this.state.pan, {
              toValue: {x: 0, y: 0},
              friction: 3
          }).start()
        }

      }
    });
  }

  // RENDER --------------------------------------------------------------------

  render(){

    // visuals ----------------------------
    const s = style(this);

    // get card data
    let stackData  = this.props.data

    // get the pan positions
    let { pan, scale } = this.state;
    let [translateX, translateY] = [pan.x, pan.y];
    // rotate intital start state of stack based on id
    // probably should update this
    let initialOffset = offsetRotationEvery(stackData.stackNumber, 4);
    let rotate = pan.x.interpolate({inputRange: [-200, 0, 200], outputRange: ["-30deg", `${initialOffset}`, "30deg"]});
    let opacity = pan.x.interpolate({inputRange: [-200, 0, 200], outputRange: [0.4, 1, 0.4]});
    // transform position based on pan state
    let transform = {transform: [{translateX}, {translateY}, {rotate}, {scale}], opacity};

    // JSX ----------------------------

    return (
        <Animated.View style={[s.stackContainer, transform]} {...this._panResponder.panHandlers}>
          <View style={s.stackContent}>
            <View style={s.header}>
              <Image
                style={s.stackProfile}
                source={{uri: 'https://www.phactual.com/wp-content/uploads/2015/05/006-bill-murray-theredlist-5-times-bill-murray-won-at-life-the-only-way-bill-murray-can.jpeg'}}
              />
              <View style={s.headerTextContainer}>
                <Text style={s.headerText}>Bill, 32</Text>
              </View>
            </View>
          </View>
        </Animated.View>
    )
  }

  componentDidMount() {
    this.state.bounceValue.setValue(1.5);
    Animated.spring(
      this.state.bounceValue,
      { toValue: 0.8, friction: 1 }
    ).start();
  }

  _nextCardState() {
    this.state.pan.setValue({x: 0, y: 0});
    this.props.nextCard();
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
  },
  stackContent: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0, 0.3)',
    padding: 20
  },
  stackProfile: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 20
  },
  headerTextContainer: {
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 30,
    color: 'white'
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

import { nextCard } from '../../store/actions'


var mapStateToProps = (state) => {
  return {
    state: state
  }
}

var mapDispatchToProps = (dispatch) => {
  return {
    doSomething: arg => console.log('nice'),
    nextCard: () => dispatch(nextCard())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stack)
