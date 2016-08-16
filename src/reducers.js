export const cards = (state, action) => {
    switch( action.type ) {
        case 'ADD_CARD':
            let newCard = Object.assign({}, action.data, {
                score: 1,
                id: +new Date
            });

            return state.concat([newCard]);

        default:
            return state || [];
    }
};

// TODO: не забыть удалить
export const textArea = (state, action) => {
    switch (action.type) {
        case 'SAVE_TEXT_AREA':
            return action.data;
        default:
            return state || "DEFAULT";
    }
};

export const decks = (state, action) => {
    switch (action.type) {
        case 'ADD_DECK':
            let newDeck = { name: action.data, id: +new Date };
            return state.concat([newDeck]);
        default:
            return state || [];
    }
};

export const addingDeck = (state, action) => {
    switch (action.type) {
        case 'SHOW_ADD_DECK': return true;
        case 'HIDE_ADD_DECK': return false;
        default:
            return !!state;
    }
};
