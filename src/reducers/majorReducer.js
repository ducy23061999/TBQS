import ActionsName from '../store/actionConst';
const initalState = [];

export default function (state = initalState, action) {
    switch (action.type) {
        case ActionsName.FETCH_ALL_MAJOR_LIST:
            return action.data
        default: 
            return state
    }
}