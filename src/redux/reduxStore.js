import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk';
import authReducer from "./authReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";


let redusers = combineReducers({
    profilePage: profileReducer,
    dialogs: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});


let store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store;


export default store;