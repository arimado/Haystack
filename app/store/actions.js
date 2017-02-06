import * as T from '../constants/actionTypes'

export const incrementCounter = ( count ) => {
    return {
        type: T.INCREMENT_COUNTER
    }
}
export const nextCard         = ()            => ({ type: T.NEXT_CARD });
export const activateStack    = stackNum      => ({ type: T.ACTIVATE_STACK, stackNum });
export const deactivateStack  = stackNum      => ({ type: T.DEACTIVATE_STACK, stackNum });
export const selectAnswer     = id            => ({ type: T.SELECT_ANSWER, id });
export const deselectAnswers  = questionId    => ({ type: T.DESELECT_ANSWERS, questionId });
export const resetStacks      = ()            => ({ type: T.RESET_STACKS });
export const submitResult     = ()            => ({ type: T.SUBMIT_RESULT });
export const toggleMatchModal = ()            => ({ type: T.TOGGLE_MATCH_MODAL });


// -----------------------------------------------------------------------------

// Example actions:

// import * as types from '../constants/ActionTypes'
//
// export const addTodo = text => ({ type: types.ADD_TODO, text })
// export const deleteTodo = id => ({ type: types.DELETE_TODO, id })
// export const editTodo = (id, text) => ({ type: types.EDIT_TODO, id, text })
// export const completeTodo = id => ({ type: types.COMPLETE_TODO, id })
// export const completeAll = () => ({ type: types.COMPLETE_ALL })
// export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED })
