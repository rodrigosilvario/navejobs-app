import UserService from "../../../../services/UserService"

export const ADD_NEW_USER = "ADD_NEW_USER";
export const EDIT_USER = "EDIT_USER";
export const REMOVE_USER = "REMOVE_USER";
export const LOAD_USERS_SUCCESS = "LOAD_USERS_SUCCESS";

export const addNewUser = user => ({
  type: ADD_NEW_USER,
  user
});

export const editUser = (user,id) => ({
  type: EDIT_USER,
  user,
  id
});

export const removeUser = (user,id) => ({
  type: REMOVE_USER,
  user,
  id
});

export const loadUsersSuccess = users => ({
  type: LOAD_USERS_SUCCESS,
  users
});


export function loadUsers() {
  return function(dispatch) {
    return UserService.getAllUsers().then(users => {
      dispatch(loadUsersSuccess(users));
    }).catch(error => {
      throw(error);
    });
  };
}


