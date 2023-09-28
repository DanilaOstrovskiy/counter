import {combineReducers, createStore} from "redux";
import {settingsReducer} from "./settings-reducer";
import {counterReducer} from "./counter-reducer";


const rootReducer = combineReducers({
    counter: counterReducer,
    settings: settingsReducer
});


export const store = createStore(rootReducer);



// @ts-ignore
window.store = store;