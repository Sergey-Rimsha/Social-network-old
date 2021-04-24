import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";


let redusers = combineReducers({
    profilePage: profileReducer,
    dialogs: dialogsReducer,
    usersPage: usersReducer
});


let store = createStore(redusers);

window.store = store;


export default store;