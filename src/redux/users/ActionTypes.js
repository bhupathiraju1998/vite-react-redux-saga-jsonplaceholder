import ActionConstants from "./ActionConstants";

export const fetchUsersStart = () => ({
    type:ActionConstants.FETCH_USERS_START
})

export const fetchUsersSuccess = (payload) => ({
    type:ActionConstants.FETCH_USERS_SUCCESS,
    payload
})

export const fetchUsersFailure = (payload) => ({
    type:ActionConstants.FETCH_USERS_FAILURE,
    payload
})




export const postTitleStart = (payload) => ({
    type:ActionConstants.POST_TITLE_START,
    payload
})

export const postTitleSuccess = (payload) => ({
    type:ActionConstants.POST_TITLE_SUCCESS,
    payload
})

export const postTitleFailure = (payload) => ({
    type:ActionConstants.POST_TITLE_FAILURE,
    payload
})




export const updateTitleStart = (payload) => ({
    type:ActionConstants.UPDATE_TITLE_START,
    payload
})

export const updateTitleSuccess = (payload) => ({
    type:ActionConstants.UPDATE_TITLE_SUCCESS,
    payload
})

export const updateTitleFailure = (payload) => ({
    type:ActionConstants.UPDATE_TITLE_FAILURE,
    payload
})





export const deleteTitleStart = (payload) => ({
    type:ActionConstants.DELETE_TITLE_START,
    payload
})

export const deleteTitleSuccess = (payload) => ({
    type:ActionConstants.DELETE_TITLE_SUCCESS,
    payload
})

export const deleteTitleFailure = (payload) => ({
    type:ActionConstants.DELETE_TITLE_FAILURE,
    payload
})



export const clearUserMessages = () => ({
    type:ActionConstants.CLEAR_USER_MESSAGES
})