import * as types from '../constants/actionTypes'

export const incrementCounter = ( count ) => {
    return {
        type: types.INCREMENT_COUNTER
    }
}
export const nextCard         = ()            => ({ type: types.NEXT_CARD });
export const activateStack    = (stackNum)    => ({ type: types.ACTIVATE_STACK, stackNum });
export const deactivateStack  = (stackNum)    => ({ type: types.DEACTIVATE_STACK, stackNum });
export const selectAnswer     = (id)          => ({ type: types.SELECT_ANSWER, id });
export const deselectAnswers  = (questionId)  => ({ type: types.DESELECT_ANSWERS, questionId });
export const resetStacks      = ()            => ({ type: types.RESET_STACKS });
export const submitResult     = ()            => ({ type: types.SUBMIT_RESULT });


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
