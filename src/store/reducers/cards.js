import seeds from '../../utils/seeds';
import {types} from '../../actions/cards';
import {v4} from 'uuid';
import {immutableSplice} from '../../utils';

const initialState = {
  cards: seeds.cards
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_CARD:
      return {
        ...state,
        cards: [...state.cards, {...action.payload.card, id: v4()}]
      };
    case types.REMOVE_CARD: {
      const {cards} = state;
      const index = cards.findIndex(({id}) => action.payload.id === id);

      if (index < 0) return state;

      return {
        ...state,
        cards: immutableSplice(state.cards, index, 1)
      };
    }

    default:
      return state;
  }
};
