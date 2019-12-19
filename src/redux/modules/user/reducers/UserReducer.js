import { ADD_NEW_USER, LOAD_USERS_SUCCESS,REMOVE_USER, EDIT_USER} from "../actions/UserActions";

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

    case EDIT_USER:
      let usersCopy = state.users.map((user,index) => {
        if(index == action.id) {
          user.name = action.user.name;
          user.job = action.user.job;
          user.birthday = action.user.birthday ;
          user.email = action.user.email;
          return user;
        }
        return user;
      })
      return {
        ...state,
        users: usersCopy
      }

    case REMOVE_USER:
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