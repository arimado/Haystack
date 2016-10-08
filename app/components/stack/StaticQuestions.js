import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import * as H from '../../helpers/helpers';

const style = (c) => (StyleSheet.create({
  rootContainer: {
    flexDirection: 'column',
    padding: 20,
  },
  questionText: {
    fontSize: 23,
    color: 'white',
    marginBottom: 20
  },
  answers: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
}))

const StaticQuestions = ({ questions, stackId }) => {
  const s = style();
  let currentQuestions = H.getCurrentQuestions(questions, stackId)
       .map((q, i) => (<Text key={i} style={s.questionText}>{q.position}. {q.value}</Text>))
  return (<View style={s.rootContainer}>{currentQuestions}</View>)
}

export default StaticQuestions;
