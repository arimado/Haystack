import React, { Component } from 'react'
import {
  View,
  TouchableOpacity,
} from 'react-native'

const StackStaticPressContainer = (props) => {
  let { isSwipe, style, children, onPress} = props;
  if (isSwipe) return (<TouchableOpacity style={{flex: 1}} onPress={() => onPress()}>{children}</TouchableOpacity>);
  return (<View style={{flex: 1}}>{children}</View>);
}

export default StackStaticPressContainer;
