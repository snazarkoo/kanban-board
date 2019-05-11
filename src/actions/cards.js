export const types = {
  ADD_CARD: 'CARDS/ADD_CARD',
  REMOVE_CARD: 'CARDS/REMOVE_CARD',
  EDIT_CARD: 'CARDS/EDIT_CARD'
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

export const editCard = card => ({
  type: types.EDIT_CARD,
  payload: {
    card
  }
});
