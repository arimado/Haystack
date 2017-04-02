import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigationExperimental,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager
} from 'react-native-fbsdk';
import _ from 'lodash';

import { incrementCounter } from 'app/store/actions'
import store from 'app/store/reducers';
import RoutesContainer from 'app/routes/RoutesContainer';

import { fetchProfile, READ_PERMISSIONS } from 'app/api/fb';
import createStyleSheet from 'app/styles';

import StatusBarBg from 'app/components/shared/StatusBarBg';

/*############################################################################*/
/*############################################################################*/
/*############################################################################*/
/*############################################################################*/

const style = createStyleSheet(common => {
  return {
  base: common.base,
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
}
})

const loginFinishHandler = function (error, result) {
  if (error) {
    return alert("login has error: " + result.error);
  }
  if (result.isCancelled) {
    return alert("login is cancelled.");
  }
  AccessToken.getCurrentAccessToken().then( data => {

    fetch('http://localhost:3005/').then(data => {})

    console.log('login successfull. Token: ', data.accessToken.toString())
    console.log(fetchProfile());
    
  })
}

class Login extends Component {
  constructor(props, context) {
    super(props);
  }
  render() {
    const s = style(this);
    return (
      <View style={s.base}>
        <StatusBarBg />
        <View style={s.bg}>
          <View style={s.topSection}>
            <View style={s.contentSpacerTop}></View>
            <View style={s.content}>
              <Text style={s.logo}>HayStack</Text>
              <Text style={s.tagLine}>Haystack is an app where you can meet people. Instead of swiping through faces like Tinder. You swipe through a set of questions that you write yourself. </Text>
            </View>
            <View style={s.contentSpacerBot}></View>
          </View>
          <View style={s.botSection}>
            <View style={s.pagerParent}>
              <View style={s.pager}>
                <Text style={s.pagerItem}> 1 </Text>
                <Text style={s.pagerItem}> 2 </Text>
                <Text style={s.pagerItem}> 3 </Text>
              </View>
            </View>
            <View style={s.buttonsParent}>
              <LoginButton
                readPermissions={READ_PERMISSIONS}
                onLoginFinished={loginFinishHandler}
                onLogoutFinished={() => alert("logout.")}/>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

/*############################################################################*/
/*############################################################################*/
/*############################################################################*/
/*############################################################################*/

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
