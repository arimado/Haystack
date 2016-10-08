import React, { Component } from 'react'
import {
  View,
  Text,
} from 'react-native'

import * as H from '../../helpers/helpers';
import QuestionWithAnswers from './QuestionWithAnswers';

const Test = ({ questions, answers, stackId }) => {

  // for each question
  // render QuestionWithAnswers component
  // pass in - question
  // pass in - answers (either all or relevant)

  let currentQuestionsWithAnswers = H.getCurrentQuestions(questions, stackId)
      .map((q, i) => <QuestionWithAnswers key={i} question={q} answers={H.getCurrentAnswers(answers, q.id)} />)
      
  return (
    <View>
      {currentQuestionsWithAnswers}
    </View>
  )
}

export default Test;
