const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'START':
            return {
                who: action.payload
            };
        default:
            return state;
    }
};

export default reducer;
