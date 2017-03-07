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

import Intro from 'app/components/intro/Intro';
import Login from 'app/login';
import Index from 'app/components/index/Index';

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
        const prefix = 'scene_'
        const { scene } = props
        switch(scene.key) {
          case prefix + 'intro':
            return <Intro _handleNavigate={this._handleNavigate.bind(this)} />;
          case prefix + 'index':
            return <Index _handleNavigate={this._handleNavigate.bind(this)} />;
          case prefix + 'login':
            return <Login _handleNavigate={this._handleNavigate.bind(this)} />;
          default:
            return;
        }
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

export default Routes
