export const ADD_STACK = 'ADD_STACK';
export const addDeck = ( deck ) => {
    return {
        type: ADD_STACK,
        deck: {
            id: deck.id,
            userID: deck.userID,
            color: deck.color
        }
    }
}

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const incrementCounter = ( count ) => {
    return {
        type: INCREMENT_COUNTER
    }
}
