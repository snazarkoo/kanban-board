import seeds from '../../utils/seeds';
import {types} from '../../actions/cards';
import {types as usersTypes} from '../../actions/users';
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
    case types.EDIT_CARD: {
      const {cards} = state;
      const index = cards.findIndex(({id}) => action.payload.card.id === id);

      if (index < 0) return state;

      return {
        ...state,
        cards: immutableSplice(state.cards, index, 1, action.payload.card)
      };
    }
    case usersTypes.REMOVE_USER: {
      const newCards = state.cards.map(card =>
        action.payload.id === card.userId ? {...card, userId: null} : card
      );

      return {
        ...state,
        cards: newCards
      };
    }

    default:
      return state;
  }
};
