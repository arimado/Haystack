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
