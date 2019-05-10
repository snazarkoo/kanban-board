import seeds, {userColor} from '../../utils/seeds';
import {types} from '../../actions/users';
import {v4} from 'uuid';
import {immutableSplice} from '../../utils';

const initialState = {
  users: seeds.users
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_USER:
      return {
        ...state,
        users: [
          ...state.users,
          {...action.payload.user, id: v4(), color: userColor()}
        ]
      };
    case types.REMOVE_USER: {
      const {users} = state;
      const index = users.findIndex(({id}) => action.payload.id === id);

      if (index < 0) return state;

      return {
        ...state,
        users: immutableSplice(state.users, index, 1)
      };
    }

    default:
      return state;
  }
};
