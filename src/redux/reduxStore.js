import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";


let redusers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    users: usersReducer
});


let store = createStore(redusers);



export default store;