import ActionConstants from "./ActionConstants";

const intialState = {
  isLoading: false,
  usersList: [],
  error: null,
};
const UserReducer = (state= intialState, action) => {
  switch (action.type) {
    case ActionConstants.FETCH_USERS_START:
      return {
        ...state,
        isLoading: true,
      };
    case ActionConstants.FETCH_USERS_SUCCESS:
    return {
        ...state,
        isLoading: false,
        usersList:action.payload
    };
    case ActionConstants.FETCH_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error:action.payload
      };
    case ActionConstants.CLEAR_USER_MESSAGES:
        return{
            ...state,
            error:null,

        }
    default:
      return state;
  }
};

export default UserReducer;
