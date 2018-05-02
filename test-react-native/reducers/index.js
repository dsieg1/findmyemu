import { combineReducers } from 'redux';
import * as squaresReducer from './squares';

export default combineReducers(Object.assign(
   squaresReducer,
));