import {profileAPI} from './../api/api';

const NEW_POST = 'NEW-POST';
const CHENGE_POST = 'CHENGE-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: '1', post: 'Hello world may first post', like: 10},
        {id: '2', post: 'Hay may world', like: 12},
        {id: '3', post: 'Nice work frends', like: 15},
        {id: '4', post: 'Good!!! work', like: 17},
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case NEW_POST: 
            let post = {id: '5', post: action.text, like: 1};
            return {
                ...state,
                posts: [...state.posts, post]
            }
        case CHENGE_POST:
            return {
                ...state,
                chengePostText: action.text
            }
        case SET_USER_PROFILE: 
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        
        default:
            return state;
    }
}

export const addPostActionCreator = (text) => {
    return {
        type: NEW_POST,
        text
    }
} 

export const setUsersProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export const setProfileStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

    //  redux-thunk

export const setUserApi = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getProfile(userId);
        dispatch(setUsersProfile(response));

    }
}

export const setStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.putProfileStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setProfileStatus(status));
        }
    }
}
export const getStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getProfileStatus(userId);
        dispatch(setProfileStatus(response.data));
    }
}


export default profileReducer;