import { ADD_NEW_USER, LOAD_USERS_SUCCESS,REMOVE_USER} from "../actions/UserActions";

const initialState = {
  users: []
}


export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_USER:
      return {
        ...state,
        users: state.users.concat(action.user)
      }
      
    case REMOVE_USER:
      console.log(action.id)
      return {
        ...state,
        users: state.users.filter((user, index, users) => users.indexOf(user,index) !== action.id)
      };

    case LOAD_USERS_SUCCESS:
        return {
          ...state, 
          users: action.users
        }
    default:
      return state;
  }
}