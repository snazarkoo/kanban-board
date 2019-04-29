export const types = {
  ADD_USER: 'USERS/ADD_USER',
  REMOVE_USER: 'USERS/REMOVE_USER'
};

export const addUser = user => ({
  type: types.ADD_USER,
  payload: {
    user
  }
});

export const removeUser = id => ({
  type: types.REMOVE_USER,
  payload: {
    id
  }
});
