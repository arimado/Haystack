import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from 'react-native'

import S from '../styles/styles.js';
import * as H from '../../helpers/helpers';
import _ from 'lodash';

// -----------------------------------------------------------------------------

// reducers.js currently holds the store object
import store from '../../store/reducers';

// -----------------------------------------------------------------------------

class Answer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scale: new Animated.Value(1),
    }
  }
  componentWillMount() {
  }

  // RENDER --------------------------------------------------------------------
  render(){
    const s = style(this);
    let { answer } = this.props;
    return (<TouchableOpacity onPress={()=>{this._press()}}><Text>{answer.value}, selected: {answer.isSelected}</Text></TouchableOpacity>)
  }

  componentDidMount() {

  }

  _press() {
    this.props.selectAnswer(this.props.answer.id)
  }

}

const style = (c) => (StyleSheet.create({
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
selectAnswer,
} from '../../store/actions'


var mapStateToProps = (state) => {
  return {
    state: state
  }
}

var mapDispatchToProps = (dispatch) => {
  return {
    selectAnswer: id => dispatch(selectAnswer(id))
   }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Answer)
