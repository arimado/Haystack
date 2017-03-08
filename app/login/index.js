import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigationExperimental,
  TouchableOpacity
} from 'react-native';

import {
  LoginButton,
  AccessToken
} from 'react-native-fbsdk';

import _ from 'lodash';

// -----------------------------------------------------------------------------

// reducers.js currently holds the store object
import store from 'app/store/reducers';
import RoutesContainer from 'app/routes/RoutesContainer';

// -----------------------------------------------------------------------------

const STACKS_ROUTE = {
  type: 'push',
  route: {
    key: 'stacks',
    title: 'Stacks'
  }
}

// -----------------------------------------------------------------------------

class Login extends Component {

  constructor(props, context) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <View>
          <Text> Login screen </Text>
          <LoginButton
            publishPermissions={["publish_actions"]}
            onLoginFinished={
              (error, result) => {
                if (error) {
                  alert("login has error: " + result.error);
                } else if (result.isCancelled) {
                  alert("login is cancelled.");
                } else {
                  AccessToken.getCurrentAccessToken().then(
                    (data) => {
                      alert(data.accessToken.toString())
                    }
                  )
                }
              }
            }
            onLogoutFinished={() => alert("logout.")}/>
      </View>
    );
  }
}

const s = StyleSheet.create({
  base: {
    flex: 1
  },
  bg: {
    flex: 1,
    backgroundColor: 'cornflowerblue'
  },
  topSection: {
    backgroundColor: 'burlywood',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },

  contentSpacerTop: {
    flex: 0.3
  },

  content: {
    backgroundColor: 'lemonchiffon',
    padding: 20,
    flex: 1
  },

    logo: {
      fontSize: 40
    },

  contentSpacerBot: {
    flex: 0.2
  },

  botSection: {
    backgroundColor: 'coral',
    flex: 0.3
  },
  bottomSection: {
    backgroundColor: '#F5FCFF'
  },
  pagerParent: {
    backgroundColor: 'chartreuse',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  pager: {
    flex: 1,
    flexDirection: 'row',
  },
    pagerItem: {
      flex: 1,
      textAlign: 'center',
      color: 'cornsilk'
    },
  buttonsParent: {
    backgroundColor: 'blueviolet',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  button: {
    flex: 1,
    flexDirection: 'column',
  },
  buttonText: {
    color: 'cornsilk',
    textAlign: 'center'
  }

})

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// REDUX CONTAINER -------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

import {
  connect
} from 'react-redux';

import { incrementCounter } from 'app/store/actions'

// -----------------------------------------------------------------------------

var mapStateToProps = (state) => {
  return {
    state: state.main
  }
}

var mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: arg => dispatch(incrementCounter(arg))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
