// Redux imports
import {createStore, combineReducers, applyMiddleware} from "redux";
import {logger} from "redux-logger";
import like from "./Reducers/likeReducer";
import share from "./Reducers/shareReducer";

export default createStore(
    combineReducers({like, share}),
    {},
    applyMiddleware(logger)
);