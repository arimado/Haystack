import React, { Component } from 'react'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigationExperimental,
  TouchableOpacity
} from 'react-native'

import _ from 'lodash';

// -----------------------------------------------------------------------------

// reducers.js currently holds the store object

import styles from '../styles'
import store from '../../store/reducers';
import RoutesContainer from '../../routes/RoutesContainer';
import HeaderContainer from '../header/HeaderContainer';

// -----------------------------------------------------------------------------

const BACK = {
  type: 'pop'
}

// -----------------------------------------------------------------------------

class Stacks extends Component {
  render() {
    return (
      <View>
        <HeaderContainer/>
        <TouchableOpacity onPress={()=>this.props._handleNavigate(BACK)}>
          <Text style={styles.welcome}>
            Stacks
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Stacks
