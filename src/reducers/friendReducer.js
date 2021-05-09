import ActionsName from '../store/actionConst';
const initalState = {
    favorite: [],
    location: []
};

export default function (state = initalState, action) {
    switch (action.type) {
        case ActionsName.SET_FRIEND_SUGGEST: 
            return {
                favorite: action.data,
                location: state.location
            }
        case ActionsName.SET_FRIEND_LOCATION:
           return {
                favorite: state.favorite,
                location: action.data
           }
        case ActionsName.REMOVE_FRIEND_LOCATION:
           return {
                favorite: state.favorite,
                location: []
           }
        case ActionsName.REMOVE_FRIEND_SUGGEST:
           return {
                favorite: [],
                location: state.location
           }
        default: 
            return state
    }
}