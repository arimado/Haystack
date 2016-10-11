import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import * as H from '../../helpers/helpers';

import Question from './Question';

const style = (c) => (StyleSheet.create({
  rootContainer: {
    flexDirection: 'column',
    padding: 20,
  },
  question: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  questionText: {
    fontSize: 23,
    color: 'white',
    marginBottom: 20,
    flexWrap: 'wrap'
  },
  answers: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
}))

const StaticQuestions = ({ questions, stackId }) => {
  const s = style();
  let currentQuestions = H.getCurrentQuestions(questions, stackId)
       .map((q, i) => (<Question key={i} position={q.position} value={q.value} />))
  return (<View style={s.rootContainer}>{currentQuestions}</View>)
}

export default StaticQuestions;
