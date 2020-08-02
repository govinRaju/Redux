import * as actionTypes from './actions'

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            // return {
            // counter: state.counter + 1
            // }
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.val
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.val
            }
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: state.counter })
            }
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results]
            // state.results.splice(id, 1)
            const updateArray = state.results.filter(result => result.id !== action.resultElId);
            return {
                ...state,
                results: updateArray
            }
    }
    // if (action.type === 'INCREMENT') {
    //     return {
    //         counter: state.counter + 1
    //     }
    // } if (action.type === 'DECREMENT') {
    //     return {
    //         counter: state.counter - 1
    //     }
    // }
    // if (action.type === 'ADD') {
    //     return {
    //         counter: state.counter + 5
    //     }
    // }
    // if (action.type === 'SUBTRACT') {
    //     return {
    //         counter: state.counter - 5
    //     }
    // }
    return state;
};

export default reducer;