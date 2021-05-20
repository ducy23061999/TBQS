export const Screens = {
    // Root
    Splash: "Splash",
    Intro: "Intro",
    AuthNavigate: "AuthNavigate",
    MainNavigate: "MainNavigate",
    
    // Home
    Home: "Home",
    HomeStack: "HomeStack",
    FriendDetail: "FriendDetail",
    GroupDetail: "GroupDetail",

    // Manage Stack
    ManageStack: "ManageStack",
    Manage: "Manage",
    EditGroup: "EditGroup",
    YourGroup: "YourGroup",

    // Notification
    NotificationStack: "NotificationStack",
    Notifications: "Notifications",
    Chat: "Chat",

    // Profile
    Profile: "Profile",

    // Login - SignUp

    Auth: "Auth",
    Login: "Login",
    SignUp: "SignUp"
}
export const API_HOST = 'http://192.168.1.3:3600'
export const HOOK_SOCKET = "ws://192.168.1.3:3600"

export const API = {
    // USER
    login: `${API_HOST}/api/users/login`,
    register: `${API_HOST}/api/users/register`,
    updateUser: `${API_HOST}/api/users/me`,
    disableUser: `${API_HOST}/api/users/deactive`,
    checkUserExist: `${API_HOST}/api/users/checkUser`,
    refreshToken: `${API_HOST}/api/users/refreshtoken`,

    // SCHOOL
    getAllSchool: `${API_HOST}/api/school`,
    getMajor: `${API_HOST}/api/school/{id}`,
    getAllMajor: `${API_HOST}/api/school/majors`,

    // Favorite
    getALLFavorite:  `${API_HOST}/api/favorites`,
    favoriteByUser: `${API_HOST}/api/favorites/getFavoriteByUser`,
    addFavorite: `${API_HOST}/api/favorites`,
    searchFavorite: `${API_HOST}/api/favorites/search`,
    updateFavorite: `${API_HOST}/api/users/addFavorites`,

    // Suggest
    suggestUser: `${API_HOST}/api/suggest/users`,
    suggestGroup: `${API_HOST}/api/suggest/groups`,
    suggestLocation: `${API_HOST}/api/suggest/locations`,

    //  Group
    requestJoinGroup: `${API_HOST}/api/groups/requestJoinGroup`,
    requestMergeGroup: `${API_HOST}/api/groups/requestMergeGroup`,
    getMergeGroup: `${API_HOST}/api/groups/requestMergeGroup`,
    requestJoin: `${API_HOST}/api/groups/requestJoin`,
    getMemberGroup: `${API_HOST}/api/groups/member`,
    getMyGroup:  `${API_HOST}/api/groups/me`,
    getRequestJoinGroup: `${API_HOST}/api/groups/requestJoinGroup`,
    approveMember: `${API_HOST}/api/groups/approveMember`,
    approveMergeGroup: `${API_HOST}/api/groups/approveGroup`,
    updateYourGroup: `${API_HOST}/api/groups/updateYourGroup`,
    deleteYourGroup: `${API_HOST}/api/groups/deleteYourGroup`,
    createGroup: `${API_HOST}/api/groups/create`,
    getRequestInvite: `${API_HOST}/api/groups/requestInviteGroup`,
    verifyJoinGroup: `${API_HOST}/api/groups/verifyJoin`,
    createVerify: `${API_HOST}/api/groups/createJoin`,
    
    // Chat
    createMessageGroup: `${API_HOST}/api/chats`,
    getGroupChatMessage: `${API_HOST}/api/chats/group`,
    getPersonChatMessage: ''
}

export const Key = {
    GOOGLE_API_KEY: 'AIzaSyDVCqf9lwDEu0GumZcyzzIJcgdlMAsfvC0',
    STORE: {
        TOKEN: 'USER@KEY'
    }
}

export const Const = {
    FavorPopular: {
        SO_RARE: 10,
        RARE: 8,
        WEIRD: 6,
        NORMAL: 5,
        POPULAR: 3,
        COMMON: 1
    }
}   