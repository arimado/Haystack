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
      scale: new Animated.Value(2),
    }
  }
  componentWillMount() {
  }

  // RENDER --------------------------------------------------------------------
  render(){
    const s = style(this);
    let { answer } = this.props;
    let { scale } = this.state;
    return (
      <Animated.View style={s.rootContainer}>
        <TouchableOpacity style={s.button} onPress={()=>{this._press()}}>
          <Text style={s.text}>{answer.value}</Text>
        </TouchableOpacity>
      </Animated.View>
    )
  }

  componentDidMount() {

  }

  _press() {
    this.props.selectAnswer(this.props.answer.id)
  }

}

const style = (c) => (StyleSheet.create({
  rootContainer: {
    flexGrow: 0.2,
    margin: 5,
  },
  button: {
    padding: 10,
    marginBottom: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255, 0.2)'
  },
  text: {
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
