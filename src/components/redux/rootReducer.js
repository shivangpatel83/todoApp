import {combineReducers} from "redux";
import {actionReducers} from "./Reducers/actionReducers";
import {textReducer} from "./Reducers/textReducer";

export const rootReducer = combineReducers(
    {
        todoReducer : actionReducers,
        textReducer : textReducer
    }
)