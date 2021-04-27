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
                ...action.date,
                isAuth: true
            }
        default:
            return state;
    }

}

export const setAuthUserDate = (id, email, login) => {
    return {
        type: SET_USER_DATE,
        date: {id, email, login}
    }
}

export default authReducer;