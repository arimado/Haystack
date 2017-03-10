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

const readPermissions = [
  'email',
  'user_about_me',
  'user_birthday',
  'user_photos',
  'user_work_history'
]


const graphReq = function(req) {
  return new GraphRequestManager().addRequest(req).start();
};

const responseInfoCallback = function (error, result, cb) {
  if (error) {
    console.log('error');
    alert('Error fetching data: ' + error.toString());
    // debugger;
  } else {
    console.log('success')
    alert('Success fetching data: ' + result.toString());
  }
}

// Create a graph request asking for user information with a callback to handle the response.
const userRequest = new GraphRequest(
  "/{user-id}",
  null,
  responseInfoCallback,
);


const meRequest = new GraphRequest(
  '/me',
  null,
  responseInfoCallback,
);

const profileReq = new GraphRequest(
  `/me?fields=email,education,first_name,last_name,location,work`,
  null,
  function(error, result) {
    if (error) {
      console.log('error');
      alert('Error fetching data: ' + error.toString());
      // debugger;
    } else {
      console.log('success')
      alert('Success fetching data: ' + result.toString());
      if ( result.id ) {
        graphReq(realProfileReq(result.id));
      }
    }
  },
);

const realProfileReq = function(id) {
  return new GraphRequest(`${id}?fields=email,education,location,work`, null, function(error, result) {
    if ( error ) {
      console.log('real profile request didnt work: ', error);
    } else {
      console.log('it worked: ', result);
    }
  })
}

// Start the graph request.
const getFBMe = function () {
  console.log('getFBme')
  var req = new GraphRequestManager().addRequest(meRequest).start(function() {
    console.log('getFBme done');
  });
}

const getFBUser = function () {
  return graphReq(userRequest);
}

const getProfile = function () {
  return graphReq(profileReq);
}

const loginFinishHandler = function (error, result) {
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
            readPermissions={readPermissions}
            onLoginFinished={loginFinishHandler}
            onLogoutFinished={() => alert("logout.")}/>
            <TouchableOpacity onPress={getFBMe}>
              <Text>ME</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={getFBUser}>
              <Text>ME</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={getProfile}>
              <Text>PROFILE</Text>
            </TouchableOpacity>
      </View>
    );
  }
}

const s = StyleSheet.create({

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
