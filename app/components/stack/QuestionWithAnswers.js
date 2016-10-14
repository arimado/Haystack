import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import * as H from '../../helpers/helpers';

import Answer from './Answer';
import Question from './Question';

const QuestionWithAnswers = ({ question, answers}) => {
  const s = style();
  return (
    <View style={s.rootContainer}>
      <Question position={question.position} value={question.value} />
      <View style={s.answers}>
        {answers.map((a, i) => <Answer key={i} answer={a}/>)}
      </View>
    </View>
  )
}

const style = (c) => (StyleSheet.create({
  rootContainer: {
    flexDirection: 'column'
  },
  questionText: {
    fontSize: 23,
    color: 'white',
    marginBottom: 10
  },
  answers: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'

  }
}))

export default QuestionWithAnswers;
