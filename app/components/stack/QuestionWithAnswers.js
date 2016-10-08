import React, { Component } from 'react'
import {
  View,
  Text,
} from 'react-native'

import * as H from '../../helpers/helpers';

const QuestionWithAnswers = ({ question, answers}) => {
  return (
    <View>
      <Text>{question.position}. {question.value}</Text>
      {answers.map((a, i) => <Text key={i}>{a.value}</Text>)}
    </View>
  )
}

export default QuestionWithAnswers;
