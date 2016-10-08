import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import * as H from '../../helpers/helpers';

import Answer from './Answer';

const QuestionWithAnswers = ({ question, answers}) => {
  const s = style();
  return (
    <View style={s.rootContainer}>
      <Text style={s.questionText}>{question.position}. {question.value}</Text>
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
    flexWrap: 'wrap'
  }
}))

export default QuestionWithAnswers;
