import Service from '../services'
import ActionNames from '../store/actionConst'

export function setUserFavorite (data) {
    return {type: ActionNames.FETCH_USER_FAVORITE_SUCCESS, data}
}

function fetchUserFavoriteFail () {
    return {type: ActionNames.FETCH_USER_FAVORITE_FAIL}
}

function addFavoriteSuccess (data) {
    return {type: ActionNames.ADD_USER_FAVORITE, data: data}
}

export function fetchUserFavorite (userId) {
    return (dispatch) => {
        Service.getFavoriteByUser(userId)
        .then(data => dispatch(setUserFavorite(data)))
        .catch(error => dispatch(fetchUserFavoriteFail()))
    }
}

export function addUserFavorite (favorite) {
    return (dispatch) => {
        Service.addFavorite(favorite)
        .then(data => {
            return  dispatch(addFavoriteSuccess(data?.data))
        })
        .catch(error => console.log(error))
    }
}

export function addExisFavorite (favorite) {
    return {type: ActionNames.ADD_USER_FAVORITE, data: favorite}
}

export function setUserData(user) {
    return {type: ActionNames.SET_USER_DATA, data: user}
}

export function removeUserData() {
    return {type: ActionNames.REMOVE_USER_DATA}
}

export function updateUserFavorite(favoriteIds) {
    return (dispatch) => {
        Service.updateUserFavorites({
            favoriteIds: favoriteIds
        })
        .then(data => {
            return  dispatch(setUserFavorite(data?.data))
        })
        .catch(error => console.log(error))
    }
}

function setSuggestLocationUser(data) {
    return {type: ActionNames.SET_FRIEND_LOCATION, data: data}
}

function setSuggestFavoriteUser(data) {
    return {type: ActionNames.SET_FRIEND_SUGGEST, data: data}
}

export function getFriendSuggestUser(data) {
    return dispatch => {
        Service.getSuggestUser()
        .then(data => {
            return dispatch(setSuggestFavoriteUser(data?.data))
        })
        .catch(error => console.log(error))
    }
}

export function getFriendLocation() {
    return (dispatch) => {
        Service.getSuggestLocation()
        .then (data => {
            return dispatch(setSuggestLocationUser(data?.data))
        })
        .catch(error => console.log(error))
    }
}

const setMajorList = (data) => ({type: ActionNames.FETCH_ALL_MAJOR_LIST, data})
export function fetchMajorList() {
    return (dispatch) => {
       Service.getAllMajors()
       .then(data => {
           return dispatch(setMajorList(data))
       })
       .catch(error => console.log(error))
    }
}

export const setSuggestGroup = (data) => ({type: ActionNames.SET_SUGGEST_GROUP, data})
export function getSuggestGroup() {
    return (dispatch) => {
        Service.getSuggestGroup()
        .then(data => {
            return dispatch(setSuggestGroup(data?.data))
        })
        .catch(error => console.log(error))
     }
}

export function updateFriendSelectList(friend, isChecked) {

    if (isChecked) {
        return (dispatch) => dispatch({type: ActionNames.SET_SELECTED_FRIEND, data: friend})
    } else {
        return dispatch => dispatch({type: ActionNames.REMOVE_SELECTED_FRIEND, data: friend})
    }
}





