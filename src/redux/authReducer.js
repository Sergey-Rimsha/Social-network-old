import usersApi from './../api/api';

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
    return (dispatch) => {
        usersApi.getAuth()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    dispatch(setAuthUserDate(id, email, login, true));
                }
            });

    }
}

export const setAuthLogin = (email, password, rememberMe) => {
    return (dispatch) => {
        usersApi.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuth())
                }
            });
    }
} 

export const setAuthLogout = () => {
    return (dispatch) => {
        usersApi.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                   dispatch(setAuthUserDate(null, null, null, false));
                } 
            });
    }
}



export default authReducer;