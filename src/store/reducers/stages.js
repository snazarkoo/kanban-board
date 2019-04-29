import seeds from '../../utils/seeds';
import {types} from '../../actions/stages';
import {v4} from 'uuid';

const initialState = {
  stages: seeds.stages
};

export const immutableSplice = (arr, start, deleteCount, ...items) => [
  ...arr.slice(0, start),
  ...items,
  ...arr.slice(start + deleteCount)
];

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_STAGE: {
      const newStage = {
        title: action.payload.title,
        id: v4()
      };

      return {
        ...state,
        stages: immutableSplice(
          state.stages,
          action.payload.position,
          0,
          newStage
        )
      };
    }

    case types.REMOVE_STAGE: {
      const {stages} = state;
      const index = stages.findIndex(({id}) => action.payload.id === id);

      if (index < 0) return state;

      return {
        ...state,
        stages: immutableSplice(state.stages, index, 1)
      };
    }
    case types.RENAME_STAGE: {
      const {stages} = state;
      const index = stages.findIndex(({id}) => action.payload.id === id);

      if (index < 0) return state;

      const newStage = {
        ...stages[index],
        title: action.payload.title
      };

      return {
        ...state,
        stages: immutableSplice(state.stages, index, 1, newStage)
      };
    }

    default:
      return state;
  }
};
