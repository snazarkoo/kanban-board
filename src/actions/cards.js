export const types = {
  ADD_CARD: 'CARDS/ADD_CARD',
  REMOVE_CARD: 'CARDS/REMOVE_CARD',
  RENAME_CARD: 'CARDS/RENAME_CARD'
};

export const addCard = card => ({
  type: types.ADD_CARD,
  payload: {
    card
  }
});

export const removeCard = id => ({
  type: types.REMOVE_CARD,
  payload: {
    id
  }
});

export const renameCardById = (title, id) => ({
  type: types.RENAME_CARD,
  payload: {
    title,
    id
  }
});
