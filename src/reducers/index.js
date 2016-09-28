const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'START': {
            return {
                who: 'you!'
            }
        }
    }
    return state
};

export default reducer
