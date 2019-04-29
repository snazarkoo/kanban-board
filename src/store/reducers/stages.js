import seeds from '../../utils/seeds';

const initialState = {
  stages: seeds.stages
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
