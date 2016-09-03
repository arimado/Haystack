
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

// STATE REDUCERS --------------------------------------------------------------

const initialMainState = {
  isFetching: false,
  stacks: [],
  questions: [],
  answers: [],
  users: [],
  counter: 0
}

const mainReducer = (state = initialMainState, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return Object.assign({}, state, {
        counter: state.counter += 1
      })
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
            key: 'login',
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
            console.log('recieved PUSH_ROUTE Dispatch Request')
            if ( isSameRoute(state, action) ) return state;
            return NavigationStateUtils.push(state, action.route)
        case 'POP_ROUTE':
            console.log('recieved POP_ROUTE Dispatch Request')
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
