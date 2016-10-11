import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import * as H from '../../helpers/helpers';

const style = (c) => (StyleSheet.create({
  question: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  questionText: {
    fontSize: 23,
    color: 'white',
    marginBottom: 20,
    flexWrap: 'wrap'
  },
  questionValue: {
    flex: 0.9
  }
}))

const Question = ({position, value}) => {
  const s = style(this);
  return (
    <View style={s.question}>
      <Text style={s.questionText}>{position}. </Text>
      <Text style={[s.questionText, s.questionValue]}>{value}</Text>
    </View>
  )
}


export default Question;
