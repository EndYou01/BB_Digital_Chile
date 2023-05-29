import { combineReducers } from "redux";
import { uiReducer } from "./uiReducer.js";


export const rootReducer = combineReducers({
    ui: uiReducer,
})