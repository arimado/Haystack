import React, { Component } from 'react'

import {
  View,
  StyleSheet
} from 'react-native'


export default () => {
  return (
    <View style={s.statusBarBg}></View>
  )
}


const s = StyleSheet.create({
  statusBarBg: {
    height: 20,
    backgroundColor: 'rebeccapurple'
  }
})
