import { createSelector } from "reselect";

export const selectUsers = (state) => state;

export const selectUsersData = createSelector(
    [selectUsers],(users) => users.usersList
)