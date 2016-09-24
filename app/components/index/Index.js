import React, { Component } from 'react'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigationExperimental,
  TouchableOpacity
} from 'react-native'
import SwipeCards from 'react-native-swipe-cards';


import S from '../styles/styles.js';
import _ from 'lodash';

// -----------------------------------------------------------------------------

// reducers.js currently holds the store object

import store from '../../store/reducers';
import RoutesContainer from '../../routes/RoutesContainer';
import Header from '../shared/Header';

// -----------------------------------------------------------------------------

const BACK = {
  type: 'pop'
}

const Cards = [
  {text: 'Tomato', backgroundColor: 'red'},
  {text: 'Aubergine', backgroundColor: 'purple'},
  {text: 'Courgette', backgroundColor: 'green'},
  {text: 'Blueberry', backgroundColor: 'blue'},
  {text: 'Umm...', backgroundColor: 'cyan'},
  {text: 'orange', backgroundColor: 'orange'},
]

// -----------------------------------------------------------------------------

class Card extends Component {
  render() {
    return (
      <View style={[styles.card, {backgroundColor: this.props.backgroundColor}]}>
        <Text>{this.props.text}</Text>
      </View>
    )
  }
}

class Stacks extends Component {
  constructor(props) {
    super(props)
    this.state = { cards: Cards }
  }
  handleYup (card) {
   console.log(`Yup for ${card.text}`)
  }
  handleNope (card) {
   console.log(`Nope for ${card.text}`)
  }
  render() {
   return (
     <SwipeCards
       cards={this.state.cards}
       renderCard={(cardData) => <Card {...cardData} />}
       renderNoMoreCards={() => <NoMoreCards />}
       handleYup={this.handleYup}
       handleNope={this.handleNope}
     />
   )
  }
}


const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
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
)(Stacks)
