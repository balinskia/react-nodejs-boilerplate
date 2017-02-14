import REDUX_CONST from '../../constants/Redux/index';

const reducer = (state = {}, action) => {
    switch (action.type) {
        case REDUX_CONST.INIT_ACTION:
            return {
                who: action.payload
            };
        default:
            return state;
    }
};

export default reducer;
