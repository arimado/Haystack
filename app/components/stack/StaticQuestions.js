import React, { Component } from 'react'
import {
  View,
  Text,
} from 'react-native'

const StaticQuestions = ({ stackId, questions }) => {
  let currentQuestions = questions.filter(q => q.stackId === stackId)
       .sort((q1, q2) => {
         let q1Pos = parseInt(q1.position);
         let q2Pos = parseInt(q2.position);
         if (q1Pos > q2Pos) return 1;
         if (q1Pos < q2Pos) return -1;
         return 0;
       })
       .map((q, i) => (<Text key={i}>{q.position}. {q.value}</Text>))
  return (<View>{currentQuestions}</View>)
}

export default StaticQuestions;
