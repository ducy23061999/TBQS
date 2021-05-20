import {API as URL} from '../comon/Constants'
import API from '../comon/API'

// -> /api/favortes/{id} -> /api/favorties/param
function parseURL(url, param) {
    return url.replace('{id}', param);
}


export default {
    login: (params) => {
       return API.sendRequest(URL.login, params, {method: 'POST'}) 
    },
    register: (params) => {
        return API.sendRequest(URL.register, params, {method: 'POST'});
    },
    updateUser: (params) => {
        return API.sendRequest(URL.updateUser, params, {method: 'PUT'})
    },
    getMe: () => {
        return API.sendRequest(URL.updateUser, {}, {method: 'GET'})
    },
    deleteMe: () => {
        return API.sendRequest(URL.updateUser, {}, {method: 'DELETE'});
    },
    disableUser: (params) => {
        return API.sendRequest(URL.disableUser, params, {method: 'PUT'})
    },
    checkUser: (query) => {
        return API.sendRequest(URL.checkUserExist, query, {method: 'GET'});
    },
    refreshToken: () => {
        return API.sendRequest(URL.refreshToken, {}, {method: 'GET'})
    },
    getAllSchool: (params) => {
        return API.sendRequest(URL.getAllSchool, params, {method: 'GET'})
    },
    getMajorBySchool: (param) => {
        return API.sendRequest(parseURL(URL.getMajor, param), {}, {method: 'GET'})
    },
    getAllMajors: () => {
        return API.sendRequest(URL.getAllMajor, {}, {method: 'GET'})
    },
    getALlFavorite: (params) => {
        return API.sendRequest(URL.getALLFavorite, params)
    },
    updateUserFavorites: (params) => {
        return API.sendRequest(URL.updateFavorite, params, {method: 'POST'});
    },

    getFavoriteByUser: () => {
        return API.sendRequest(URL.favoriteByUser, {}, {method: 'GET'})
    },
    addFavorite: (params) => {
        return API.sendRequest(URL.addFavorite, params, {method: 'POST'})
    },
    searchFavorite: (query) => {
        return API.sendRequest(URL.searchFavorite, {s: query}, {method: 'GET'})
    },
    getSuggestUser: () => {
        return API.sendRequest(URL.suggestUser, {}, {method: 'GET'})
    },
    getSuggestGroup: () => {
        return API.sendRequest(URL.suggestGroup, {}, {method: 'GET'})
    },
    getSuggestLocation: () => {
        return API.sendRequest(URL.suggestLocation, {}, {method: 'GET'})
    },
    requestJoinGroup: (params) => {
        return API.sendRequest(URL.requestJoinGroup, params, {method: 'POST'})
    },
    requestMergeGroup: (params) => {
        return API.sendRequest(URL.requestMergeGroup, params, {method: 'POST'})
    },
    getMergeGroup: () => {
        return API.sendRequest(URL.getMergeGroup)
    },
    requestJoin: (params) => {
        return API.sendRequest(URL.requestJoin, params, {method: 'POSt'})
    },
    getMemberGroup: () => {
        return API.sendRequest(URL.getMemberGroup)
    },
    getMyGroup: () => {
        return API.sendRequest(URL.getMyGroup, {}, {method: 'GET'})
    },
    getRequestJoin: () => {
        return API.sendRequest(URL.getRequestJoinGroup, {}, {method: 'GET'})
    },
    approveMember: (params) => {
        return API.sendRequest(URL.approveMember, params, {method: 'POST'})
    },
    approveMergeGroup: (params) => {
        return API.sendRequest(URL.approveMergeGroup, params, {method: 'POST'})
    },
    updateGroup: (params) => {
        return API.sendRequest(URL.updateYourGroup, params, {method: 'PUT', contentType: 'multipart/form-data'})
    },
    deleteGroup: () => {
        return API.sendRequest(URL.deleteYourGroup, {}, {method: 'DELETE'})
    },
    createGroup: (params) => {
        return API.sendRequest(URL.createGroup, params, {method: 'POST'})
    },
    getInviteGroup: () => {
        return API.sendRequest(URL.getRequestInvite, {}, {method: 'GET'})
    },
    verifyJoinGroup: (params) => {
        return API.sendRequest(URL.verifyJoinGroup, params, {method: 'POST'})
    },
    createVerify: (params) => {
        return API.sendRequest(URL.createVerify, params, {method: 'POST'})
    },
    createNewMessage: (params) => {
        return API.sendRequest(URL.createMessageGroup, params, {method: 'POST'})
    },
    getGroupChatMessage: (param) => {
        return API.sendRequest(URL.getGroupChatMessage, {}, {method: 'GET'})
    },
    getPersonGroupChatMessage: (param) => {
        return API.sendRequest(parseURL(URL.getPersonChatMessage, param))
    }

}
