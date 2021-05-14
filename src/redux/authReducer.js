import {authAPI} from './../api/api';
import {stopSubmit} from 'redux-form';

const SET_USER_DATE = 'SET_USER_DATE';

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATE: 
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }

}

export const setAuthUserDate = (id, email, login, isAuth) => {
    return {
        type: SET_USER_DATE,
        payload: {id, email, login, isAuth}
    }
}


        //  redux-thunk

export const setAuth = () => {    
    return async (dispatch) => {
        let response = await authAPI.me();            
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthUserDate(id, email, login, true));
        }

    }
}

export const setAuthLogin = (email, password, rememberMe) => {
    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe);            
        if (response.data.resultCode === 0) {
            dispatch(setAuth())
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
            dispatch(stopSubmit('login', {_error: message}))
        }
    }
    
} 

export const setAuthLogout = () => {
    return async (dispatch) => {
        let response = await authAPI.logout();            
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserDate(null, null, null, false));
        } 
    
    }
}



export default authReducer;