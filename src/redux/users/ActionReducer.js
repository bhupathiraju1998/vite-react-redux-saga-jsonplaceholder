import ActionConstants from "./ActionConstants";

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
      const userListFromStateIntial = state.usersList
      const fetchedUserList = userListFromStateIntial.concat(action.payload )
      
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
      const userListFromState = state.usersList
      const addedUserList = [...userListFromState,action.payload] 
      return {
        ...state,
        isLoading: false,
        usersList: addedUserList.reverse(),//reverse was used to show the newly added object on top
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
      const updatedUsersList = state.usersList
      const item = state.usersList.find((eachItem) =>  eachItem.id === action.payload.id);
      updatedUsersList[state.usersList.indexOf(item)] = action.payload
      return {
        ...state,
        isLoading: false,
        usersList:updatedUsersList
      };
    case ActionConstants.UPDATE_TITLE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case ActionConstants.DELETE_TITLE_START:
      console.log("hitted")
      return{
        ...state,isLoading:true,
      };
    case ActionConstants.DELETE_TITLE_SUCCESS:
      console.log("entered success")
      const titleListFromState = state.usersList
      const filteredList = titleListFromState.filter((eachTitle)=> eachTitle.id !== action.payload)
      console.log("filtered list",filteredList)
      return{
        ...state,isLoading:false,usersList:filteredList
      };
    case ActionConstants.DELETE_TITLE_FAILURE:
      return {
        ...state,isLoading:false,error:action.payload,
      }
    case ActionConstants.CLEAR_USER_MESSAGES:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default UserReducer;
