import ActionsName from '../store/actionConst';
const initalState = [];

export default function (state = initalState, action) {
    switch (action.type) {
        case ActionsName.SET_ALL_SCHOOL:
            return action.data
        default: 
            return state
    }
}