import ActionsName from '../store/actionConst';
const initalState = [];

export default function (state = initalState, action) {
    switch (action.type) {
        case ActionsName.SET_SUGGEST_GROUP:
            return action.data
        case ActionsName.REMOVE_SUGGEST_GROUP:
            return []
        default: 
            return state
    }
}