import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";


let redusers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer
});


let store = createStore(redusers);



export default store;