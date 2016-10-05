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
  ScrollView
} from 'react-native'

import S from '../styles/styles.js';

import _ from 'lodash';

// -----------------------------------------------------------------------------

// reducers.js currently holds the store object

import store from '../../store/reducers';
import RoutesContainer from '../../routes/RoutesContainer';
import Header from '../shared/Header';
import Stack from './Stack'


// -----------------------------------------------------------------------------

const BACK = {
  type: 'pop'
}

// -----------------------------------------------------------------------------

const StackScroll = (key, data, isSwipe) => (
  <ScrollView key={key}>
      <Stack data={data} isSwipe={isSwipe}/>
  </ScrollView>);

class Index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const s = style(this);

    let { stacks, visibleStack, activeStack } = this.props.state.main;

    let currentStacks = stacks.map((s, i) => ({ stackNumber: i, ...s }))
                              .slice(visibleStack, visibleStack + 4)
                              .reverse();

    console.log('currentStacks: ', currentStacks.forEach(s => console.log(s)));
    return (
      <View style={S.base}>
        <Header />
        <View style={s.stacksContainer}>
          {currentStacks.map((stack, i) =>  {
            return ( stack.id === activeStack ? StackScroll(i, stack, false) : <Stack key={i} data={stack} isSwipe={true}/> )
          })}

          {/* <ScrollView></ScrollView> */}
        </View>
      </View>
    );
  }
}

const style = (c) => (StyleSheet.create({
  stacksContainer: {
    flex: 1,
    backgroundColor: 'indigo',
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
    backgroundColor: 'red'
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
)(Index)
