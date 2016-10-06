
import { NavigationExperimental } from 'react-native';

import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'

import {
  connect,
  Provider
} from 'react-redux';

import Thunk from 'redux-thunk';
import Logger from 'redux-logger';

const {
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils
} = NavigationExperimental

import db from './database'

// ACTIONS ---------------------------------------------------------------------

import {
  INCREMENT_COUNTER,
  NEXT_CARD,
  ACTIVATE_STACK,
  DEACTIVATE_STACK
} from '../constants/actionTypes'

// STATE REDUCERS --------------------------------------------------------------

const initialMainState = {
  isFetching: false,
  visibleStack: 0,
  activeStack: null,
  stacks: db.stacks,
  questions: db.questions,
  answers: db.answers,
  users: db.users,
  counter: 0
}

const mainReducer = (state = initialMainState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return Object.assign({}, state, {
        counter: state.counter += 1
      })
      break;
    case NEXT_CARD: // You need to change this name to stack instead
      return Object.assign({}, state, { visibleStack: state.visibleStack + 1 })
      break;
    case ACTIVATE_STACK:
      return Object.assign({}, state, { activeStack: action.stackNum })
      break;
    case DEACTIVATE_STACK:
      return Object.assign({}, state, { activeStack: null })
      break;
    default:
      return state;
  }
};

// NAVIGATION REDUCERS ---------------------------------------------------------

const initialNavState = {
    index: 0,
    key: 'root',
    routes: [
        {
            key: 'index_ja',
            // key: 'intro',
            // key: 'index',
            title: 'Welcome',
        }
    ]
}

const isSameRoute = (state, action) => {
    return (
        state.routes[state.index].key ===
        (action.route && action.route.key)
    )
}
const isRootRoute = (state) => {
    return state.index === 0 || state.routes.length === 1
}

const navReducer = (state = initialNavState, action) => {
    switch (action.type) {
        case 'PUSH_ROUTE':
            if ( isSameRoute(state, action) ) return state;
            return NavigationStateUtils.push(state, action.route)
        case 'POP_ROUTE':
            if ( isRootRoute(state) ) return state;
            return NavigationStateUtils.pop(state);
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    navigation: navReducer,
    main: mainReducer
});

const loggerMiddleware = Logger()

const store = createStore(
    rootReducer,
    applyMiddleware( Thunk, loggerMiddleware )
)


export default store;
