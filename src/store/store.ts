import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";


const rootReducers = combineReducers({
    counter: counterReducer
});

export type AllStateType = ReturnType<typeof rootReducers>
export const store = createStore(rootReducers);



// @ts-ignore
window.store = store;