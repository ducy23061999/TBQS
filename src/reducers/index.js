import {combineReducers} from 'redux'
import counterReducer from './counterReducer'
import userFavorites from './userFavoriteReducer'
import userReducer from './userReducer'
import friendReducer from './friendReducer';
import majorReducer from './majorReducer';
import groupReducer from './groupReducer';
import selectedFriendReducer from './selectedFriendReducer';
import chatReducer from './chatReducer'
import schoolReducer from './schoolReducer'

export default combineReducers({
    counterReducer: counterReducer,
    userFavorites,
    userReducer,
    friendReducer,
    majorReducer,
    groupReducer,
    selectedFriendReducer,
    chatReducer,
    schoolReducer
})