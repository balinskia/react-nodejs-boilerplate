/**
 * Created by Bartlomiej Rutkowski on 22.10.16.
 */
import {initAction} from '../index';
import mockStore from '../../../util/mockStore';
import REDUX_CONST from '../../../constants/Redux/index';

test('Should return same object as initAction', () => {
    const initialState = {};
    const store = mockStore(initialState);
    store.dispatch(initAction());

    const initActionObject = {
        type: REDUX_CONST,
        payload: 'YOU!'
    };
    const actionsAnticipated = [initActionObject];
    const actionsDispatched = store.getActions();

    expect(actionsDispatched).toEqual(actionsAnticipated);
});

