import {v4} from 'uuid';

export const userColor = () =>
  '#' + Math.floor(Math.random() * 16777215).toString(16);

const stages = [
  {
    id: v4(),
    name: 'To do'
  },
  {
    id: v4(),
    name: 'In progress'
  },
  {
    id: v4(),
    name: 'Done'
  }
];

const users = [
  {
    id: v4(),
    firstName: 'Nazar',
    lastName: 'Shcherbiak',
    color: userColor()
  }
];

const cards = [
  {
    id: v4(),
    stage: stages[0].id,
    name: 'Example card',
    description: 'Example description',
    user: null
  }
];

export default {stages, cards, users};
