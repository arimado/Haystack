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

    let { answer } = this.props;
    let { scale } = this.state;
    
    const s = style(answer.isSelected);
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
    let { answer, deselectAnswers, selectAnswer } = this.props;
    deselectAnswers(answer.questionId)
    selectAnswer(answer.id)
  }

}

const style = (isSelected) => (StyleSheet.create({
  rootContainer: {
    flexGrow: 0.2,
    flexShrink: 1,
    margin: 5,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    marginBottom: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255, 0.2)',
    backgroundColor: isSelected === 'true' ? 'rgba(255,255,255, 0.7)' : 'transparent'
  },
  text: {
    flex: 1,
    color: isSelected === 'true' ? 'black' : 'white',
  },
  selectedText: {
    color: 'black'
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
deselectAnswers
} from '../../store/actions'


var mapStateToProps = (state) => {
  return {
    state: state
  }
}

var mapDispatchToProps = (dispatch) => {
  return {
    selectAnswer: id => dispatch(selectAnswer(id)),
    deselectAnswers: questionId => dispatch(deselectAnswers(questionId)),
   }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Answer)
