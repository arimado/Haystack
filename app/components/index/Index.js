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
import Stack from '../stack/Stack'
import StackScroll from '../stack/StackScroll'

// -----------------------------------------------------------------------------

const BACK = {
  type: 'pop'
}

// -----------------------------------------------------------------------------

// const StackScroll = (props) => (
//   <ScrollView>
//       <Stack data={props.data} isSwipe={props.isSwipe}/>
//   </ScrollView>);

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
    return (
      <View style={S.base}>
        <Header handleNavigate={this.props._handleNavigate} resetStacks={this.props.resetStacks}/>
        <View style={s.stacksContainer}>
          {currentStacks.map((stack, i) =>  {
            return ( stack.id === activeStack ? <StackScroll key={i} data={stack} isSwipe={false} /> :
                                                <Stack key={i} data={stack} isSwipe={true}/> )
          })}
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

import {
resetStacks
} from '../../store/actions'

var mapStateToProps = (state) => {
  return {
    state: state
  }
}

var mapDispatchToProps = (dispatch) => {
  return {
    resetStacks: () => dispatch(resetStacks())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
