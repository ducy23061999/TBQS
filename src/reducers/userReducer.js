import ActionsName from '../store/actionConst';

const initalState = null;

export default function (state = initalState, action) {
    switch (action.type) {
        case ActionsName.SET_USER_DATA:
            return action.data;
        case ActionsName.REMOVE_USER_DATA:
            return null
        default:
            return state;       
    }
}