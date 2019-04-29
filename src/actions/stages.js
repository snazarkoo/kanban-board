export const types = {
  ADD_STAGE: 'STAGES/ADD_STAGE',
  REMOVE_STAGE: 'STAGES/REMOVE_STAGE',
  RENAME_STAGE: 'STAGES/RENAME_STAGE'
};

export const addStage = (title, position) => ({
  type: types.ADD_STAGE,
  payload: {
    title,
    position
  }
});

export const removeStage = id => ({
  type: types.REMOVE_STAGE,
  payload: {
    id
  }
});

export const renameStageById = (title, id) => ({
  type: types.RENAME_STAGE,
  payload: {
    title,
    id
  }
});
