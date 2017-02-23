import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import S from 'app/components/styles/styles';

// -----------------------------------------------------------------------------

// reducers.js currently holds the store object

import store from 'app/store/reducers';
import RoutesContainer from 'app/routes/RoutesContainer';
import Header from 'app/components/shared/Header';
import Modal from 'app/components/shared/Modal';
import Stack from 'app/components/stack/Stack';
import StackScroll from 'app/components/stack/StackScroll';

// -----------------------------------------------------------------------------

const BACK = {
  type: 'pop'
}

// -----------------------------------------------------------------------------

class Index extends Component {
  render() {
    const s = style(this);

    const { stacks, visibleStack, activeStack, showMatchModal } = this.props.state.main;

    let currentStacks = stacks
      .map((s, i) => ({ stackNumber: i, ...s }))
      .slice(visibleStack, visibleStack + 4)
      .reverse();

    return (
      <View style={S.base}>
        <Header
          handleNavigate={this.props._handleNavigate}
          resetStacks={this.props.resetStacks}
        />
        <View style={s.stacksContainer}>
          {currentStacks.map((stack, i) => (stack.id === activeStack
                     ? <StackScroll key={stack.id} data={stack} isSwipe={false} />
                     : <Stack key={stack.id} data={stack} isSwipe={true}/> )
          )}
        </View>
        { showMatchModal
            ? <Modal handleNavigate={this.props._handleNavigate}/>
            : null }
      </View>
    );
  }
}

const style = (c) => (StyleSheet.create({
  stacksContainer: {
    flex: 1,
    backgroundColor: 'indigo',
    position: 'relative'
  },
  stackContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    flex: 1,
    margin: 15,
    backgroundColor: 'red'
  }
}))


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

// -----------------------------------------------------------------------------

import {
resetStacks
} from '../../store/actions'

var mapStateToProps = (state) => {
  return {
    state: state
  }
}

var mapDispatchToProps = (dispatch) => {
  return {
    resetStacks: () => dispatch(resetStacks())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
