import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {combineReducers} from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';
import {IS_DEV} from '../config/constants';

const appliedMiddleware = IS_DEV ? [thunk, logger] : [thunk];

export default function configureStore() {
  return createStore(
    combineReducers(reducers),
    applyMiddleware(...appliedMiddleware)
  );
}
