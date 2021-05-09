import ActionsName from '../store/actionConst';

const initalState = [];

export default function (state = initalState, action) {
    switch (action.type) {
        case ActionsName.FETCH_USER_FAVORITE_SUCCESS:
            return action.data;
        case ActionsName.ADD_USER_FAVORITE:
            return [...state, action.data]
        case ActionsName.DELETE_USER_FAVORITE: 
            return [...state]
        case ActionsName.FETCH_USER_FAVORITE_FAIL:
            return []
        default:
            return state;       
    }
}