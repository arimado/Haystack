import React, { Component } from 'react'
import {
  View,
  Text,
} from 'react-native'

import * as H from '../../helpers/helpers';

const StaticQuestions = ({ questions, stackId }) => {
  let currentQuestions = H.getCurrentQuestions(questions, stackId)
       .map((q, i) => (<Text key={i}>{q.position}. {q.value}</Text>))
  return (<View>{currentQuestions}</View>)
}

export default StaticQuestions;
