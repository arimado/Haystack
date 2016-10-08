import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import * as H from '../../helpers/helpers';
import QuestionWithAnswers from './QuestionWithAnswers';

const Test = ({ questions, answers, stackId }) => {
  const s = style();

  // for each question
  // render QuestionWithAnswers component
  // pass in - question
  // pass in - answers (either all or relevant)

  let currentQuestionsWithAnswers = H.getCurrentQuestions(questions, stackId)
      .map((q, i) => <QuestionWithAnswers key={i} question={q} answers={H.getCurrentAnswers(answers, q.id)} />)

  return (
    <View style={s.rootContainer}>
      {currentQuestionsWithAnswers}
    </View>
  )
}

const style = (c) => (StyleSheet.create({
  rootContainer: {
    margin: 20
  }
}))

export default Test;
