const shareReducer = (state = {
    url: 'Sorry, that link is broken',
    openState: false
}, action)  => {
    switch (action.type) {
        case "SET_URL":
            state = {
                ...state,
                url: action.payload
             };
            break;
        case "SET_OPEN":
            state = {
                ...state,
                openState: action.payload
            }
            break;
        default:
            break;
    }
    return state;
};

export default shareReducer;