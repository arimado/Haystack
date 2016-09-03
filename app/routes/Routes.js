import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  NavigationExperimental,
  View,
  Text
} from 'react-native';

import {
  createStore,
  combineReducers
} from 'redux';

import {
  connect,
  Provider
} from 'react-redux'

const {
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils
} = NavigationExperimental

import Login from '../components/login/Login';

class Routes extends Component {

    constructor(props, context) {
        super(props, context)
        this._renderScene = this._renderScene.bind(this)
    }

    _handleNavigate(action) {
        switch (action && action.type) {
            case 'push':
                this.props.pushRoute(action.route)
                return true
            case 'back':
            case 'pop':
                if (this.props.navigation.index === 0) {
                  return false
                }
                this.props.popRoute()
                return true
            default:
                return false
        }
    }

    _renderScene(props) {

        console.log(props);

        const prefix = 'scene_'
        const { scene } = props
        if (scene.key === prefix + 'login') {
            return  <Login _handleNavigate={this._handleNavigate.bind(this)} />
        }
        // if (scene.key === prefix + 'sign_up') {
        //     return <SignUpContainer _handleNavigate={this._handleNavigate.bind(this)} />
        // }
        // if (scene.key === prefix + 'decks') {
        //     return <DecksContainer _handleNavigate={this._handleNavigate.bind(this)} />
        // }
        // if (scene.key === prefix + 'create_deck') {
        //     return <CreateDeckContainer _handleNavigate={this._handleNavigate.bind(this)} />
        // }
        // if (scene.key === prefix + 'show_deck') {
        //     return <ShowDeckContainer _handleNavigate={this._handleNavigate.bind(this)} />
        // }
    }

    render() {

        let navDirection = null;
        let routes = this.props.navigation.routes
        let currentRoute = routes[routes.length - 1]
        if (currentRoute.direction) navDirection = currentRoute.direction;

        return (
            <NavigationCardStack
              direction={navDirection}
              navigationState={this.props.navigation}
              onNavigate={this._handleNavigate.bind(this)}
              renderScene={this._renderScene} />
        );
    }
}

// class Routes extends Component {
//     constructor(props, context) {
//         super(props, context)
//     }
//     render() {
//         return (
//             <NavigationCardStack/>
//         );
//     }
// }

export default Routes
