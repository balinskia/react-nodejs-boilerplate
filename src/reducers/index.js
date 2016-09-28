const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'START': {
            return {
                who: action.payload
            }
        }
    }
    return state
};

export default reducer
