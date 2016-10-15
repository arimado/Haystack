import React, { Component } from 'react'

import {
  ScrollView,
  StyleSheet
} from 'react-native'

import Stack from './Stack'

const style = (c) => (StyleSheet.create({
  rootContainer: {

  },
  stackContainer: {
    paddingTop: 200,
    paddingBottom: 200
  }
}))

const StackScroll = ({data, isSwipe}) => {
  const s = style(this);
  return(
  <ScrollView>
      <Stack style={s.stackContainer} data={data} isSwipe={isSwipe}/>
  </ScrollView>)
};

export default StackScroll;
