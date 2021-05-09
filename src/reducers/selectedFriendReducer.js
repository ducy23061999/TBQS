import ActionsName from '../store/actionConst';

const initalState = [];

export default function (state = initalState, action) {
    switch (action.type) {
        case ActionsName.SET_SELECTED_FRIEND:
            return [...state, action.data]
        case ActionsName.REMOVE_SELECTED_FRIEND:
            return state.filter(friend => friend.id != action.data.id)
        default:
            return state;       
    }
}