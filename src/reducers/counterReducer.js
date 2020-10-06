
const initalState = 0;

export default function (state = initalState, action) {
    switch (action.type) {
        case 1:
            return state + 1;
        case 2:
            return state - 1;
        case 3: {
            return action.payload;
        }
        default:
            return state;       
    }
}