import ActionsName from '../store/actionConst';
const initalState = {
    chatGroup: [],
    chatPerson: []
};

export default function (state = initalState, action) {
    switch (action.type) {
        case ActionsName.SET_GROUP_MESSAGE: {

            return {
                chatGroup: action.data,
                chatPerson: state.chatPerson
            }
        }
        case ActionsName.SET_MESSAGE_USER: {

            return {
                chatGroup: state.chatGroup,
                chatPerson: state.data
            }
        }
        case ActionsName.ADD_MESSAGE_TO_GROUP: {
            
            return {
                chatGroup: [action.data, ...state.chatGroup],
                chatPerson: state.chatPerson
            }
        }
        case ActionsName.ADD_MESSAGE_TO_USER: {

            return {
                chatGroup: state.chatGroup,
                chatPerson: []
            }
        }
        default: 
            return state

    }
}