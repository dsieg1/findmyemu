const likeReducer = (state = {
    pageLikes: 1,
    lastValues: []
}, action)  => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                pageLikes: state.pageLikes + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        case "SUBTRACT":
            state = {
                ...state,
                pageLikes: state.pageLikes - action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        default:
            break;
    }
    return state;
};

export default likeReducer;