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

export const clearUserMessages = () => ({
    type:ActionConstants.CLEAR_USER_MESSAGES
})