import React, { Component } from 'react'
import {
  View,
  Text,
} from 'react-native'

import * as H from '../../helpers/helpers';

import Answer from './Answer';

const QuestionWithAnswers = ({ question, answers}) => {
  return (
    <View>
      <Text>{question.position}. {question.value}</Text>
      {answers.map((a, i) => <Answer key={i} answer={a}/>)}
    </View>
  )
}

export default QuestionWithAnswers;
