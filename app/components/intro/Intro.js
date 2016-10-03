import React, { Component } from 'react'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigationExperimental,
  TouchableOpacity
} from 'react-native'

import _ from 'lodash';

// -----------------------------------------------------------------------------

// reducers.js currently holds the store object
import store from '../../store/reducers';
import Header from '../shared/Header';
import StatusBarBg from '../shared/StatusBarBg';

// -----------------------------------------------------------------------------

const INDEX_ROUTE = {
  type: 'push',
  route: {
    key: 'index',
    title: 'Stacks'
  }
}

// -----------------------------------------------------------------------------

class CurrentComponent extends Component {

  constructor(props, context) {
    super(props);
  }

  render() {
    return (
      <View style={s.base}>
        <StatusBarBg />
        <View style={s.bg}>
          <View style={s.topSection}>
            <View style={s.contentSpacerTop}></View>
            <View style={s.content}>
              <Text style={s.logo}>HayStack</Text>
              <Text style={s.tagLine}>Haystack is an app where you can meet people. Instead of swiping through faces like Tinder. You swipe through a set of questions that you write yourself. </Text>
            </View>
            <View style={s.contentSpacerBot}></View>
          </View>
          <View style={s.botSection}>
            <View style={s.pagerParent}>
              <View style={s.pager}>
                <Text style={s.pagerItem}> 1 </Text>
                <Text style={s.pagerItem}> 2 </Text>
                <Text style={s.pagerItem}> 3 </Text>
              </View>
            </View>
            <View style={s.buttonsParent}>
              <TouchableOpacity style={s.button} onPress={() => this.props._handleNavigate(INDEX_ROUTE)}>
                <Text style={s.buttonText}> Quick Start </Text>
              </TouchableOpacity>
              <TouchableOpacity style={s.button}>
                <Text style={s.buttonText}> Create Profile </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const s = StyleSheet.create({
  base: {
    flex: 1
  },
  bg: {
    flex: 1,
    backgroundColor: 'cornflowerblue'
  },
  topSection: {
    backgroundColor: 'burlywood',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },

  contentSpacerTop: {
    flex: 0.3
  },

  content: {
    backgroundColor: 'lemonchiffon',
    padding: 20,
    flex: 1
  },

    logo: {
      fontSize: 40
    },

  contentSpacerBot: {
    flex: 0.2
  },

  botSection: {
    backgroundColor: 'coral',
    flex: 0.3
  },
  bottomSection: {
    backgroundColor: '#F5FCFF'
  },
  pagerParent: {
    backgroundColor: 'chartreuse',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  pager: {
    flex: 1,
    flexDirection: 'row',
  },
    pagerItem: {
      flex: 1,
      textAlign: 'center',
      color: 'cornsilk'
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

import { incrementCounter } from '../../store/actions'

// -----------------------------------------------------------------------------

var mapStateToProps = (state) => {
  return {
    state: state.main
  }
}

var mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: arg => dispatch(incrementCounter(arg))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentComponent)
