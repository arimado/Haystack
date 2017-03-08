const mainReducer = (state = initialMainState, action) => {
  switch (action.type) {
    case NEXT_CARD: // You need to change this name to stack instead
      return Object.assign({}, state, { visibleStack: state.visibleStack + 1 })
      break;
    case ACTIVATE_STACK:
      return Object.assign({}, state, { activeStack: action.stackNum })
      break;
    case DEACTIVATE_STACK:
      return Object.assign({}, state, { activeStack: null })
      break;
    case SELECT_ANSWER:
      let updatedAnswerInAnswers = H.setValueOnEntity(state.answers, { id: action.id }, a => ({ isSelected: 'true' }));
      return Object.assign({}, state, {answers: updatedAnswerInAnswers})
      break;
    case DESELECT_ANSWERS:
      let updatedAnswers = H.setValueOnEntities(state.answers, { questionId: action.questionId }, a => ({ isSelected: 'false' }))
      return Object.assign({}, state, {answers: updatedAnswers})
      break;
    case RESET_STACKS: // You need to change this name to stack instead
      return Object.assign({}, state, { visibleStack: 0 })
      break;
    case SUBMIT_RESULT:
      return
      break;
    case TOGGLE_MATCH_MODAL:
      return Object.assign({}, state, { showMatchModal: !state.showMatchModal })
    default:
      return state;
  }
};

const reducer = function ( state = initialState, action ) {
  switch (action.type) {
    case
      return
      break;
    default:
      return
  }
}
