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
  AccessToken,
  GraphRequest,
  GraphRequestManager
} from 'react-native-fbsdk';

import {
  fetchProfile,
  READ_PERMISSIONS
} from 'app/api/fb';

import _ from 'lodash';

import { connect } from 'react-redux';
import { incrementCounter } from 'app/store/actions'
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

const loginFinishHandler = function (error, result) {
  if (error) {
    return alert("login has error: " + result.error);
  }
  if (result.isCancelled) {
    return alert("login is cancelled.");
  }
  AccessToken.getCurrentAccessToken().then( data => {
    console.log('login successfull. Token: ', data.accessToken.toString())
  })
}

class Login extends Component {
  constructor(props, context) {
    super(props);
  }
  render() {
    return (
      <View>
          <Text> Login screen </Text>
          <LoginButton
            readPermissions={READ_PERMISSIONS}
            onLoginFinished={loginFinishHandler}
            onLogoutFinished={() => alert("logout.")}/>
            <TouchableOpacity onPress={fetchProfile}>
              <Text>FETCH PROFILE</Text>
            </TouchableOpacity>
      </View>
    );
  }
}

const s = StyleSheet.create({

})

// -----------------------------------------------------------------------------
// REDUX CONTAINER -------------------------------------------------------------
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
