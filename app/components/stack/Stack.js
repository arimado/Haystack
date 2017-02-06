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
  Image,
  Modal
} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'

import S from '../styles/styles.js';
import * as H from '../../helpers/helpers';
import _ from 'lodash';

// -----------------------------------------------------------------------------

// reducers.js currently holds the store object
import store from '../../store/reducers';
import RoutesContainer from '../../routes/RoutesContainer';
import Header from '../shared/Header';
import StackStaticPressContainer from './StackStaticPressContainer';
import StaticQuestions from './StaticQuestions';
import Test from './Test';
import EndTest from './EndTest';

// -----------------------------------------------------------------------------

// Constants

const BACK = { type: 'pop'};
const SWIPE_THRESHOLD = 150;
const CLOSED_STACK_SCALE = 1;
const OPEN_STACK_SCALE = 1.03;

// -----------------------------------------------------------------------------

class Stack extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bounceValue: new Animated.Value(0),
      pan: new Animated.ValueXY(),
      scale: new Animated.Value(CLOSED_STACK_SCALE),
      rotate: new Animated.Value(),
      rotateY: new Animated.Value(),
      response: ['lol', 'nice'],
      offsetEnabled: true
    }
  }
  componentWillMount() {

    let { nextCard, isSwipe } = this.props;


    if (!isSwipe) {
      Animated.spring(this.state.scale, {
          toValue: OPEN_STACK_SCALE,
          friction: 3
      }).start()
    }

    this._panResponder = PanResponder.create({

      // JA
      // onMoveShouldSetResponderCapture &
      // onMoveShouldSetPanResponderCapture
      // ----
      // these functions will allow the capture of responder events
      // currently if the current position of touch event is vx or vy is 0
      // (the user is not dragging, just touching a static position) then the
      // pan responder will not activate
      // this is so touchable events can still happen within the containg element
      // accepting touch events

      onMoveShouldSetResponderCapture: (e, {vx, vy}) => {
        if ( !this.props.isSwipe ) return false;
        if ( vx === 0 && vy === 0) return false;

        return true;
      },
      onMoveShouldSetPanResponderCapture: (e, {vx, vy}) => {
        if ( !this.props.isSwipe ) return false;
        if ( vx === 0 && vy === 0) return false;

        return true;
      },
      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
        this.state.pan.setValue({x: 0, y: 0});
        this.state.rotate.setValue(90);
      },
      onPanResponderMove: (event, gestureState) => {
        Animated.event([ null, {dx: this.state.pan.x, dy: this.state.pan.y},]).call(this, event, gestureState);
      },
      onPanResponderRelease: (e, {vx, vy}) => {

        this.setState((s1, s2) => {
          return { response: ['pan responder', ...s1.response] }
        })

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
    let stackData   = this.props.data;
    let isSwipe     = this.props.isSwipe;
    let { pan, scale, offsetEnabled, rotateY } = this.state;
    let [translateX, translateY] = [ pan.x, pan.y ];
    let initialOffset, rotate, opacity, transform = {};

    let StackContainerStyle = isSwipe ? s.stackContainer : s.stackContainerOpen ;

    if (isSwipe) {
      initialOffset = offsetEnabled ? H.offsetRotationEvery(stackData.stackNumber, 4) : '0deg';
      rotate = pan.x.interpolate({inputRange: [-200, 0, 200], outputRange: ["-30deg", `${initialOffset}`, "30deg"]});
      opacity = pan.x.interpolate({inputRange: [-200, 0, 200], outputRange: [0.4, 1, 0.4]});
      // transform position based on pan state
      transform = {transform: [{translateX}, {translateY}, {rotate}, {scale}], opacity};
    } else {
      transform = {transform: [{translateX: 0}, {translateY: 0}, { rotate: '0deg' }, {scale}]};
    }

    // JSX ----------------------------

    // get all the current questions with this stack id
      // get all the answers associated with that question
        // make sure there's an answer flag

    // this would come from main state

    let { users, questions, answers } = this.props.state.main;

    let owner = users.filter(u => u.id === stackData.userId)[0];

    return (
        <Animated.View
          style={[StackContainerStyle, transform]}
          {...this._panResponder.panHandlers}>
          <StackStaticPressContainer
            style={s.stackContent}
            onPress={this._stackPress()}
            isSwipe={isSwipe}
            >
            <View style={s.header}>
              <Image
                style={s.stackProfile}
                source={{uri: owner.img}}
              />
              <View style={s.headerTextContainer}>
                <Text style={s.headerText}>{owner.name}, {owner.age}</Text>
              </View>

            </View>
            <View style={s.body}>

              { isSwipe
                ? <StaticQuestions
                    stackId={stackData.id}
                    questions={questions} />
                : <Test
                    stackId={stackData.id}
                    questions={questions}
                    answers={answers} /> }

              { isSwipe
                ? null
                : <EndTest
                    stackClose={this._stackClose()}
                    stackSubmit={this._stackSubmit()}/> }

            </View>
          </StackStaticPressContainer>
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

  _stackPress() {
    return () => {
      let { id } = this.props.data;
      this.setState((s1, s2) => {
        return { response: ['press' + id, ...s1.response] }
      })
      this.props.activateStack(id);
    }
  }
  _stackClose() {
    return () => {
      this.setState({offsetEnabled: false});
      Animated.spring(this.state.scale, {
          toValue: OPEN_STACK_SCALE,
          friction: 3
      }).start(()=> {
      })
      this.props.deactivateStack();
    }
  }
  _stackSubmit() {

    // validate
    // makre sure user has answered all questions
    // make sure at least one answer isSelected for each question

    // result
    // get all questions associated with this stack
    // get only the correct ones
    // see if there all selected

    // stack > questions > answers

    return () => {

      const { toggleMatchModal }      = this.props;
      const { id: stackId }         = this.props.data;
      const { questions, answers }  = this.props.state.main;

      const currentAnswers = _.flatten(
            H.getCurrentQuestions(questions, stackId)
            .map(q => H.getCurrentAnswers(answers, q.id)));

      const correctAnswers = currentAnswers
        .filter(a => a.isCorrect === 'true').length;
      const correctlyAnswered = currentAnswers
        .filter(a => a.isCorrect === 'true' && a.isSelected === 'true')
        .length;

      toggleMatchModal();
    }

  }
}

const style = (c) => (StyleSheet.create({
  stacksContainer: {
    flex: 1,
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
  stackContainerOpen: {
    flex: 1,
    margin: 15,
    backgroundColor: c.props.data.colorScheme
  },
  stackContent: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255, 0.2)',
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
  },
  body: {
    flex: 1
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
nextCard,
activateStack,
deactivateStack,
toggleMatchModal
} from '../../store/actions'

var mapStateToProps = (state) => {
  return {
    state: state
  }
}

var mapDispatchToProps = (dispatch) => {
  return {
    doSomething: arg => console.log('nice'),
    nextCard: () => dispatch(nextCard()),
    activateStack: stackNum => dispatch(activateStack(stackNum)),
    deactivateStack: stackNum => dispatch(deactivateStack(stackNum)),
    toggleMatchModal: () => dispatch(toggleMatchModal())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stack)
