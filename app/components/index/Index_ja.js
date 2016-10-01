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
import Stack from './Stack'


// -----------------------------------------------------------------------------

const BACK = {
  type: 'pop'
}

// -----------------------------------------------------------------------------


class Index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const s = style(this);

    // only render 4 stacks from visibleStack
    let { stacks, visibleStack } = this.props.state.main;
    let currentStacks = stacks.slice(visibleStack, 4);
    
    return (
      <View style={S.base}>
        <Header />
        <View style={s.stacksContainer}>
          {currentStacks.map((stack, i) => (<Stack key={i} data={stack}/>))}
        </View>
      </View>
    );
  }
}


const style = (c) => (StyleSheet.create({
  stacksContainer: {
    flex: 1,
    backgroundColor: 'darksalmon',
    position: 'relative'
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
