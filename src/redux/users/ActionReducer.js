import { persistReducer } from "redux-persist";
import ActionConstants from "./ActionConstants";
import storage from 'redux-persist/lib/storage';

const intialState = {
  isLoading: false,
  usersList: [],
  error: null,
};
const UserReducer = (state = intialState, action) => {
  switch (action.type) {
    case ActionConstants.FETCH_USERS_START:
      return {
        ...state,
        isLoading: true,
      };
    case ActionConstants.FETCH_USERS_SUCCESS:
      const userListFromStateIntial = state.usersList;
      const fetchedUserList = userListFromStateIntial.concat(action.payload);

      return {
        ...state,
        isLoading: false,
        usersList: fetchedUserList,
      };
    case ActionConstants.FETCH_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ActionConstants.POST_TITLE_START:
      return {
        ...state,
        isLoading: true,
      };

    case ActionConstants.POST_TITLE_SUCCESS:
      const userListFromState = state.usersList;
      const addedUserList = [...userListFromState, action.payload];
      return {
        ...state,
        isLoading: false,
        usersList: addedUserList.reverse(), //reverse was used to show the newly added object on top
      };
    case ActionConstants.POST_TITLE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ActionConstants.UPDATE_TITLE_START:
      return {
        ...state,
        isLoading: true,
      };
    case ActionConstants.UPDATE_TITLE_SUCCESS:
      const updatedList = [...state.usersList];
      for (let i = 0; i < updatedList.length; i++) {
        if (updatedList[i].id === action.payload.id) {
          updatedList[i] = action.payload;
          break; // Break the loop if the object is found and replaced
        }
      }
      return {
        ...state,
        isLoading: false,
        usersList: updatedList,
      };
    case ActionConstants.UPDATE_TITLE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case ActionConstants.DELETE_TITLE_START:
      console.log("hitted");
      return {
        ...state,
        isLoading: true,
      };
    case ActionConstants.DELETE_TITLE_SUCCESS:
      console.log("entered success");
      const titleListFromState = state.usersList;
      const filteredList = titleListFromState.filter(
        (eachTitle) => eachTitle.id !== action.payload
      );
      console.log("filtered list", filteredList);
      return {
        ...state,
        isLoading: false,
        usersList: filteredList,
      };
    case ActionConstants.DELETE_TITLE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ActionConstants.CLEAR_USER_MESSAGES:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

const persistConfig = {
  key:'root',
  storage
}

export default persistReducer(persistConfig, UserReducer);
