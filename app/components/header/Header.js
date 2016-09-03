import React, { Component } from 'react'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigationExperimental,
  TouchableOpacity,

} from 'react-native'

import _ from 'lodash';

// -----------------------------------------------------------------------------

// reducers.js currently holds the store object
import store from '../../store/reducers';
import RoutesContainer from '../../routes/RoutesContainer';
import StatusBarBg from './StatusBarBg'

// -----------------------------------------------------------------------------

export default () => {
  return (
    <View>
      <StatusBarBg/>
      <Text> Header!</Text>
    </View>
  )
}
